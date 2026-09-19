--- 
title: suggests
hide_title: false
hide_table_of_contents: false
keywords:
  - suggests
  - geo_places
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

Creates, updates, deletes, gets or lists a <code>suggests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="suggests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.geo_places.suggests" /></td></tr>
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
    <td><a href="#suggest"><CopyableCode code="suggest" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-QueryText"><code>QueryText</code></a></td>
    <td><a href="#parameter-key"><code>key</code></a></td>
    <td>Suggest provides intelligent predictions or recommendations based on the user's input or context, such as relevant places, points of interest, query terms or search category. It is designed to help users find places or point of interests candidates or identify a follow on query based on incomplete or misspelled queries. It returns a list of possible matches or refinements that can be used to formulate a more accurate query. Users can select the most appropriate suggestion and use it for further searching. The API provides options for filtering results by location and other attributes, and allows for additional features like phonemes and timezones. The response includes refined query terms and detailed place information. For more information, see Suggest in the Amazon Location Service Developer Guide.</td>
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
<tr id="parameter-key">
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="suggest"
    values={[
        { label: 'suggest', value: 'suggest' }
    ]}
>
<TabItem value="suggest">

Suggest provides intelligent predictions or recommendations based on the user's input or context, such as relevant places, points of interest, query terms or search category. It is designed to help users find places or point of interests candidates or identify a follow on query based on incomplete or misspelled queries. It returns a list of possible matches or refinements that can be used to formulate a more accurate query. Users can select the most appropriate suggestion and use it for further searching. The API provides options for filtering results by location and other attributes, and allows for additional features like phonemes and timezones. The response includes refined query terms and detailed place information. For more information, see Suggest in the Amazon Location Service Developer Guide.

```sql
EXEC aws.geo_places.suggests.suggest 
@region='{{ region }}' --required, 
@key='{{ key }}' 
@@json=
'{
"QueryText": "{{ QueryText }}", 
"MaxResults": {{ MaxResults }}, 
"MaxQueryRefinements": {{ MaxQueryRefinements }}, 
"BiasPosition": "{{ BiasPosition }}", 
"Filter": "{{ Filter }}", 
"AdditionalFeatures": "{{ AdditionalFeatures }}", 
"Language": "{{ Language }}", 
"PoliticalView": "{{ PoliticalView }}", 
"IntendedUse": "{{ IntendedUse }}", 
"TravelMode": "{{ TravelMode }}"
}'
;
```
</TabItem>
</Tabs>
