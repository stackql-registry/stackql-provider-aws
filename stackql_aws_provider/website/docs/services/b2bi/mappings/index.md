--- 
title: mappings
hide_title: false
hide_table_of_contents: false
keywords:
  - mappings
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

Creates, updates, deletes, gets or lists a <code>mappings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="mappings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.b2bi.mappings" /></td></tr>
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
    <td><a href="#generate_mapping"><CopyableCode code="generate_mapping" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-inputFileContent"><code>inputFileContent</code></a>, <a href="#parameter-outputFileContent"><code>outputFileContent</code></a>, <a href="#parameter-mappingType"><code>mappingType</code></a></td>
    <td></td>
    <td>Takes sample input and output documents and uses Amazon Bedrock to generate a mapping automatically. Depending on the accuracy and other factors, you can then edit the mapping for your needs. Before you can use the AI-assisted feature for Amazon Web Services B2B Data Interchange you must enable models in Amazon Bedrock. For details, see AI-assisted template mapping prerequisites in the Amazon Web Services B2B Data Interchange User guide. To generate a mapping, perform the following steps: Start with an X12 EDI document to use as the input. Call TestMapping using your EDI document. Use the output from the TestMapping operation as either input or output for your GenerateMapping call, along with your sample file.</td>
</tr>
<tr>
    <td><a href="#test_mapping"><CopyableCode code="test_mapping" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-inputFileContent"><code>inputFileContent</code></a>, <a href="#parameter-mappingTemplate"><code>mappingTemplate</code></a>, <a href="#parameter-fileFormat"><code>fileFormat</code></a></td>
    <td></td>
    <td>Maps the input file according to the provided template file. The API call downloads the file contents from the Amazon S3 location, and passes the contents in as a string, to the inputFileContent parameter.</td>
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
    defaultValue="generate_mapping"
    values={[
        { label: 'generate_mapping', value: 'generate_mapping' },
        { label: 'test_mapping', value: 'test_mapping' }
    ]}
>
<TabItem value="generate_mapping">

Takes sample input and output documents and uses Amazon Bedrock to generate a mapping automatically. Depending on the accuracy and other factors, you can then edit the mapping for your needs. Before you can use the AI-assisted feature for Amazon Web Services B2B Data Interchange you must enable models in Amazon Bedrock. For details, see AI-assisted template mapping prerequisites in the Amazon Web Services B2B Data Interchange User guide. To generate a mapping, perform the following steps: Start with an X12 EDI document to use as the input. Call TestMapping using your EDI document. Use the output from the TestMapping operation as either input or output for your GenerateMapping call, along with your sample file.

```sql
EXEC aws.b2bi.mappings.generate_mapping 
@region='{{ region }}' --required 
@@json=
'{
"inputFileContent": "{{ inputFileContent }}", 
"outputFileContent": "{{ outputFileContent }}", 
"mappingType": "{{ mappingType }}"
}'
;
```
</TabItem>
<TabItem value="test_mapping">

Maps the input file according to the provided template file. The API call downloads the file contents from the Amazon S3 location, and passes the contents in as a string, to the inputFileContent parameter.

```sql
EXEC aws.b2bi.mappings.test_mapping 
@region='{{ region }}' --required 
@@json=
'{
"inputFileContent": "{{ inputFileContent }}", 
"mappingTemplate": "{{ mappingTemplate }}", 
"fileFormat": "{{ fileFormat }}"
}'
;
```
</TabItem>
</Tabs>
