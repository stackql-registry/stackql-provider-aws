--- 
title: starter_mapping_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - starter_mapping_templates
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

Creates, updates, deletes, gets or lists a <code>starter_mapping_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="starter_mapping_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.b2bi.starter_mapping_templates" /></td></tr>
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
    <td><a href="#create_starter_mapping_template"><CopyableCode code="create_starter_mapping_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-mappingType"><code>mappingType</code></a>, <a href="#parameter-templateDetails"><code>templateDetails</code></a></td>
    <td></td>
    <td>Amazon Web Services B2B Data Interchange uses a mapping template in JSONata or XSLT format to transform a customer input file into a JSON or XML file that can be converted to EDI. If you provide a sample EDI file with the same structure as the EDI files that you wish to generate, then the service can generate a mapping template. The starter template contains placeholder values which you can replace with JSONata or XSLT expressions to take data from your input file and insert it into the JSON or XML file that is used to generate the EDI. If you do not provide a sample EDI file, then the service can generate a mapping template based on the EDI settings in the templateDetails parameter. Currently, we only support generating a template that can generate the input to produce an Outbound X12 EDI file.</td>
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

## `INSERT` examples

<Tabs
    defaultValue="create_starter_mapping_template"
    values={[
        { label: 'create_starter_mapping_template', value: 'create_starter_mapping_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_starter_mapping_template">

Amazon Web Services B2B Data Interchange uses a mapping template in JSONata or XSLT format to transform a customer input file into a JSON or XML file that can be converted to EDI. If you provide a sample EDI file with the same structure as the EDI files that you wish to generate, then the service can generate a mapping template. The starter template contains placeholder values which you can replace with JSONata or XSLT expressions to take data from your input file and insert it into the JSON or XML file that is used to generate the EDI. If you do not provide a sample EDI file, then the service can generate a mapping template based on the EDI settings in the templateDetails parameter. Currently, we only support generating a template that can generate the input to produce an Outbound X12 EDI file.

```sql
INSERT INTO aws.b2bi.starter_mapping_templates (
outputSampleLocation,
mappingType,
templateDetails,
region
)
SELECT 
'{{ outputSampleLocation }}',
'{{ mappingType }}' /* required */,
'{{ templateDetails }}' /* required */,
'{{ region }}'
RETURNING
mapping_template
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: starter_mapping_templates
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the starter_mapping_templates resource.
    - name: outputSampleLocation
      description: |
        Specifies the details for the Amazon S3 file location that is being used with Amazon Web Services B2B Data Interchange. File locations in Amazon S3 are identified using a combination of the bucket and key.
      value:
        bucketName: "{{ bucketName }}"
        key: "{{ key }}"
    - name: mappingType
      value: "{{ mappingType }}"
      description: |
        Specify the format for the mapping template: either JSONATA or XSLT.
      valid_values: ['JSONATA', 'XSLT']
    - name: templateDetails
      description: |
        Describes the details needed for generating the template. Specify the X12 transaction set and version for which the template is used: currently, we only support X12.
      value:
        x12:
          transactionSet: "{{ transactionSet }}"
          version: "{{ version }}"
`}</CodeBlock>

</TabItem>
</Tabs>
