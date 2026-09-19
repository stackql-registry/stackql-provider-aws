--- 
title: query_plannings
hide_title: false
hide_table_of_contents: false
keywords:
  - query_plannings
  - lakeformation
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

Creates, updates, deletes, gets or lists a <code>query_plannings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="query_plannings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lakeformation.query_plannings" /></td></tr>
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
    <td><a href="#start_query_planning"><CopyableCode code="start_query_planning" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-QueryPlanningContext"><code>QueryPlanningContext</code></a>, <a href="#parameter-QueryString"><code>QueryString</code></a></td>
    <td></td>
    <td>Submits a request to process a query statement. This operation generates work units that can be retrieved with the GetWorkUnits operation as soon as the query state is WORKUNITS_AVAILABLE or FINISHED.</td>
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
    defaultValue="start_query_planning"
    values={[
        { label: 'start_query_planning', value: 'start_query_planning' }
    ]}
>
<TabItem value="start_query_planning">

Submits a request to process a query statement. This operation generates work units that can be retrieved with the GetWorkUnits operation as soon as the query state is WORKUNITS_AVAILABLE or FINISHED.

```sql
EXEC aws.lakeformation.query_plannings.start_query_planning 
@region='{{ region }}' --required 
@@json=
'{
"QueryPlanningContext": "{{ QueryPlanningContext }}", 
"QueryString": "{{ QueryString }}"
}'
;
```
</TabItem>
</Tabs>
