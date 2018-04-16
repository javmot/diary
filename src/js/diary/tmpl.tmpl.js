export default collection => `
    <div class="flex__container flex__container--row">
        <div class="diary__container flex__item flex__item--span-6">
            <div class="flex__container flex__container--row">
                <h2 class="text--h2 flex__item flex__item--sm text--nowrap flex__item--align-end">
                    ${collection[0].date.date()} - ${collection[collection.length -1].date.date()}
                </h2>
                <h5 class="text--h5 flex__item flex__item--align-start">
                    ${collection[0].date.format('MMMM')} ${collection[0].date.year()}
                </h5>
            </div>
            <div class="flex__container flex__container--row diary__header">
                <div class="flex__item flex__item--span-2 diary__col">Day</div>
                <div class="flex__item flex__item--span-2 diary__col">Time</div>
                <div class="flex__item diary__col">Description</div>
            </div>
            ${collection.map(model => `
                <div class="diary__row flex__container flex__container--row flex__container--align-stretch">
                    <div class="diary__col flex__item flex__item--span-2 text--h3 text--light text--center">
                        <p>${model.date.format('ddd')}</p>
                        <p>${model.date.date()}</p>
                    </div>
                    <div class="diary__col flex__item flex__item--span-2 flex__item--nogutter">
                        <div class="flex__container flex__container--column flex__container--nogutter flex__container--align-stretch">
                            <div class="flex__item diary__line">&nbsp;</div>
                            <div class="flex__item diary__line">&nbsp;</div>
                            <div class="flex__item diary__line">&nbsp;</div>
                            <div class="flex__item diary__line">&nbsp;</div>
                        </div>
                    </div>
                    <div class="diary__col flex__item flex__item flex__item--span-8 flex__item--nogutter">
                        <div class="flex__container flex__container--nogutter flex__container--align-stretch">
                            <div class="flex__item diary__line text--light">${model.name_es || '&nbsp;'}</div>
                            <div class="flex__item diary__line">&nbsp;</div>
                            <div class="flex__item diary__line">&nbsp;</div>
                            <div class="flex__item diary__line">&nbsp;</div>
                        </div>
                    </div>
                </div>
            `).join('')}

        </div>
        <div class="diary__container flex__item flex__item--span-6">
            <div class="flex__container flex__container--row">
                <h5 class="text--h5 flex__item text--right flex__item--align-start">
                    ${collection[collection.length -1].date.format('MMMM')}
                    ${collection[collection.length -1].date.year()}
                </h5>
                <h2 class="text--h2 flex__item flex__item--sm text--nowrap flex__item--align-end">
                    ${collection[0].date.date()} - ${collection[collection.length -1].date.date()}
                </h2>
            </div>
            <div class="flex__container flex__container--row diary__header">
                <div class="flex__item flex__item--span-2 diary__col">Time</div>
                <div class="flex__item diary__col">Description</div>
            </div>
            ${collection.map(() => `
                <div class="diary__row flex__container flex__container--row flex__container--align-stretch">
                    <div class="diary__col flex__item flex__item--span-2 flex__item--nogutter">
                        <div class="flex__container flex__container--column flex__container--nogutter flex__container--align-stretch">
                            <div class="flex__item diary__line">&nbsp;</div>
                            <div class="flex__item diary__line">&nbsp;</div>
                            <div class="flex__item diary__line">&nbsp;</div>
                            <div class="flex__item diary__line">&nbsp;</div>
                        </div>
                    </div>
                    <div class="diary__col flex__item flex__item flex__item--span-10 flex__item--nogutter">
                        <div class="flex__container flex__container--nogutter flex__container--align-stretch">
                            <div class="flex__item diary__line">&nbsp;</div>
                            <div class="flex__item diary__line">&nbsp;</div>
                            <div class="flex__item diary__line">&nbsp;</div>
                            <div class="flex__item diary__line">&nbsp;</div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    </div>
`;
