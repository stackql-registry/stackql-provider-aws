--- 
title: principal_things_v2s
hide_title: false
hide_table_of_contents: false
keywords:
  - principal_things_v2s
  - iot
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

Creates, updates, deletes, gets or lists a <code>principal_things_v2s</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="principal_things_v2s" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.principal_things_v2s" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_principal_things_v2"
    values={[
        { label: 'list_principal_things_v2', value: 'list_principal_things_v2' }
    ]}
>
<TabItem value="list_principal_things_v2">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="thingName" /></td>
    <td><code>string</code></td>
    <td>The name of the thing. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="thingPrincipalType" /></td>
    <td><code>string</code></td>
    <td>The type of the relation you want to specify when you attach a principal to a thing. The value defaults to NON_EXCLUSIVE_THING. EXCLUSIVE_THING - Attaches the specified principal to the specified thing, exclusively. The thing will be the only thing that’s attached to the principal. NON_EXCLUSIVE_THING - Attaches the specified principal to the specified thing. Multiple things can be attached to the principal. (EXCLUSIVE_THING, NON_EXCLUSIVE_THING)</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

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
    <td><a href="#list_principal_things_v2"><CopyableCode code="list_principal_things_v2" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amzn-principal"><code>x-amzn-principal</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-thingPrincipalType"><code>thingPrincipalType</code></a></td>
    <td>Lists the things associated with the specified principal. A principal can be an X.509 certificate or an Amazon Cognito ID. Requires permission to access the ListPrincipalThings action.</td>
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
<tr id="parameter-x-amzn-principal">
    <td><CopyableCode code="x-amzn-principal" /></td>
    <td><code>string</code></td>
    <td>The principal. A principal can be an X.509 certificate or an Amazon Cognito ID.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in this operation.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results.</td>
</tr>
<tr id="parameter-thingPrincipalType">
    <td><CopyableCode code="thingPrincipalType" /></td>
    <td><code>string</code></td>
    <td>The type of the relation you want to filter in the response. If no value is provided in this field, the response will list all things, including both the EXCLUSIVE_THING and NON_EXCLUSIVE_THING attachment types. EXCLUSIVE_THING - Attaches the specified principal to the specified thing, exclusively. The thing will be the only thing that’s attached to the principal. NON_EXCLUSIVE_THING - Attaches the specified principal to the specified thing. Multiple things can be attached to the principal.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_principal_things_v2"
    values={[
        { label: 'list_principal_things_v2', value: 'list_principal_things_v2' }
    ]}
>
<TabItem value="list_principal_things_v2">

Lists the things associated with the specified principal. A principal can be an X.509 certificate or an Amazon Cognito ID. Requires permission to access the ListPrincipalThings action.

```sql
SELECT
thingName,
thingPrincipalType
FROM aws.iot.principal_things_v2s
WHERE `x-amzn-principal` = '{{ x-amzn-principal }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND thingPrincipalType = '{{ thingPrincipalType }}'
;
```
</TabItem>
</Tabs>
