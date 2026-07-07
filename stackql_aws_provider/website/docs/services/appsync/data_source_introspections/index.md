--- 
title: data_source_introspections
hide_title: false
hide_table_of_contents: false
keywords:
  - data_source_introspections
  - appsync
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

Creates, updates, deletes, gets or lists a <code>data_source_introspections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_source_introspections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appsync.data_source_introspections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_source_introspection"
    values={[
        { label: 'get_data_source_introspection', value: 'get_data_source_introspection' }
    ]}
>
<TabItem value="get_data_source_introspection">

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
    <td><CopyableCode code="introspectionId" /></td>
    <td><code>string</code></td>
    <td>The introspection ID. Each introspection contains a unique ID that can be used to reference the instrospection record.</td>
</tr>
<tr>
    <td><CopyableCode code="introspectionResult" /></td>
    <td><code>object</code></td>
    <td>The DataSourceIntrospectionResult object data.</td>
</tr>
<tr>
    <td><CopyableCode code="introspectionStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the introspection during retrieval. By default, when a new instrospection is being retrieved, the status will be set to PROCESSING. Once the operation has been completed, the status will change to SUCCESS or FAILED depending on how the data was parsed. A FAILED operation will return an error and its details as an introspectionStatusDetail. (PROCESSING, FAILED, SUCCESS)</td>
</tr>
<tr>
    <td><CopyableCode code="introspectionStatusDetail" /></td>
    <td><code>string</code></td>
    <td>The error detail field. When a FAILED introspectionStatus is returned, the introspectionStatusDetail will also return the exact error that was generated during the operation.</td>
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
    <td><a href="#get_data_source_introspection"><CopyableCode code="get_data_source_introspection" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-introspection_id"><code>introspection_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-includeModelsSDL"><code>includeModelsSDL</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves the record of an existing introspection. If the retrieval is successful, the result of the instrospection will also be returned. If the retrieval fails the operation, an error message will be returned instead.</td>
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
<tr id="parameter-introspection_id">
    <td><CopyableCode code="introspection_id" /></td>
    <td><code>string</code></td>
    <td>The introspection ID. Each introspection contains a unique ID that can be used to reference the instrospection record.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-includeModelsSDL">
    <td><CopyableCode code="includeModelsSDL" /></td>
    <td><code>boolean</code></td>
    <td>A boolean flag that determines whether SDL should be generated for introspected types. If set to true, each model will contain an sdl property that contains the SDL for that type. The SDL only contains the type data and no additional metadata or directives.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of introspected types that will be returned in a single response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Determines the number of types to be returned in a single response before paginating. This value is typically taken from nextToken value from the previous response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_data_source_introspection"
    values={[
        { label: 'get_data_source_introspection', value: 'get_data_source_introspection' }
    ]}
>
<TabItem value="get_data_source_introspection">

Retrieves the record of an existing introspection. If the retrieval is successful, the result of the instrospection will also be returned. If the retrieval fails the operation, an error message will be returned instead.

```sql
SELECT
introspectionId,
introspectionResult,
introspectionStatus,
introspectionStatusDetail
FROM aws.appsync.data_source_introspections
WHERE introspection_id = '{{ introspection_id }}' -- required
AND region = '{{ region }}' -- required
AND includeModelsSDL = '{{ includeModelsSDL }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
