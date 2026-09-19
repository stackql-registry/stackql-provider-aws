--- 
title: what_if_forecasts
hide_title: false
hide_table_of_contents: false
keywords:
  - what_if_forecasts
  - forecastquery
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>what_if_forecasts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="what_if_forecasts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.forecastquery.what_if_forecasts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#query_what_if_forecast"><CopyableCode code="query_what_if_forecast" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WhatIfForecastArn"><code>WhatIfForecastArn</code></a>, <a href="#parameter-Filters"><code>Filters</code></a></td>
    <td></td>
    <td>Retrieves a what-if forecast.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="query_what_if_forecast"
    values={[
        { label: 'query_what_if_forecast', value: 'query_what_if_forecast' }
    ]}
>
<TabItem value="query_what_if_forecast">

Retrieves a what-if forecast.

```sql
EXEC aws.forecastquery.what_if_forecasts.query_what_if_forecast 
@region='{{ region }}' --required 
@@json=
'{
"WhatIfForecastArn": "{{ WhatIfForecastArn }}", 
"StartDate": "{{ StartDate }}", 
"EndDate": "{{ EndDate }}", 
"Filters": "{{ Filters }}", 
"NextToken": "{{ NextToken }}"
}'
;
```
</TabItem>
</Tabs>
