--- 
title: autocompletes
hide_title: false
hide_table_of_contents: false
keywords:
  - autocompletes
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

Creates, updates, deletes, gets or lists an <code>autocompletes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="autocompletes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.geo_places.autocompletes" /></td></tr>
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
    <td><a href="#autocomplete"><CopyableCode code="autocomplete" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-QueryText"><code>QueryText</code></a></td>
    <td><a href="#parameter-key"><code>key</code></a></td>
    <td>Autocomplete completes potential places and addresses as the user types, based on the partial input. The API enhances the efficiency and accuracy of address by completing query based on a few entered keystrokes. It helps you by completing partial queries with valid address completion. Also, the API supports the filtering of results based on geographic location, country, or specific place types, and can be tailored using optional parameters like language and political views. Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers. For more information, see Autocomplete in the Amazon Location Service Developer Guide.</td>
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
    defaultValue="autocomplete"
    values={[
        { label: 'autocomplete', value: 'autocomplete' }
    ]}
>
<TabItem value="autocomplete">

Autocomplete completes potential places and addresses as the user types, based on the partial input. The API enhances the efficiency and accuracy of address by completing query based on a few entered keystrokes. It helps you by completing partial queries with valid address completion. Also, the API supports the filtering of results based on geographic location, country, or specific place types, and can be tailored using optional parameters like language and political views. Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers. For more information, see Autocomplete in the Amazon Location Service Developer Guide.

```sql
EXEC aws.geo_places.autocompletes.autocomplete 
@region='{{ region }}' --required, 
@key='{{ key }}' 
@@json=
'{
"QueryText": "{{ QueryText }}", 
"MaxResults": {{ MaxResults }}, 
"BiasPosition": "{{ BiasPosition }}", 
"Filter": "{{ Filter }}", 
"PostalCodeMode": "{{ PostalCodeMode }}", 
"AdditionalFeatures": "{{ AdditionalFeatures }}", 
"Language": "{{ Language }}", 
"PoliticalView": "{{ PoliticalView }}", 
"IntendedUse": "{{ IntendedUse }}"
}'
;
```
</TabItem>
</Tabs>
