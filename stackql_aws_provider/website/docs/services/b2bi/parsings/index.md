--- 
title: parsings
hide_title: false
hide_table_of_contents: false
keywords:
  - parsings
  - b2bi
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

Creates, updates, deletes, gets or lists a <code>parsings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="parsings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.b2bi.parsings" /></td></tr>
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
    <td><a href="#test_parsing"><CopyableCode code="test_parsing" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-inputFile"><code>inputFile</code></a>, <a href="#parameter-fileFormat"><code>fileFormat</code></a>, <a href="#parameter-ediType"><code>ediType</code></a></td>
    <td></td>
    <td>Parses the input EDI (electronic data interchange) file. The input file has a file size limit of 250 KB.</td>
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
    defaultValue="test_parsing"
    values={[
        { label: 'test_parsing', value: 'test_parsing' }
    ]}
>
<TabItem value="test_parsing">

Parses the input EDI (electronic data interchange) file. The input file has a file size limit of 250 KB.

```sql
EXEC aws.b2bi.parsings.test_parsing 
@region='{{ region }}' --required 
@@json=
'{
"inputFile": "{{ inputFile }}", 
"fileFormat": "{{ fileFormat }}", 
"ediType": "{{ ediType }}", 
"advancedOptions": "{{ advancedOptions }}"
}'
;
```
</TabItem>
</Tabs>
