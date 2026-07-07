--- 
title: parallel_datas
hide_title: false
hide_table_of_contents: false
keywords:
  - parallel_datas
  - translate
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

Creates, updates, deletes, gets or lists a <code>parallel_datas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="parallel_datas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.translate.parallel_datas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_parallel_data"
    values={[
        { label: 'get_parallel_data', value: 'get_parallel_data' }
    ]}
>
<TabItem value="get_parallel_data">

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
    <td><CopyableCode code="AuxiliaryDataLocation" /></td>
    <td><code>object</code></td>
    <td>The Amazon S3 location of a file that provides any errors or warnings that were produced by your input file. This file was created when Amazon Translate attempted to create a parallel data resource. The location is returned as a presigned URL to that has a 30-minute expiration.</td>
</tr>
<tr>
    <td><CopyableCode code="DataLocation" /></td>
    <td><code>object</code></td>
    <td>The Amazon S3 location of the most recent parallel data input file that was successfully imported into Amazon Translate. The location is returned as a presigned URL that has a 30-minute expiration. Amazon Translate doesn't scan all input files for the risk of CSV injection attacks. CSV injection occurs when a .csv or .tsv file is altered so that a record contains malicious code. The record begins with a special character, such as =, +, -, or @. When the file is opened in a spreadsheet program, the program might interpret the record as a formula and run the code within it. Before you download an input file from Amazon S3, ensure that you recognize the file and trust its creator.</td>
</tr>
<tr>
    <td><CopyableCode code="LatestUpdateAttemptAuxiliaryDataLocation" /></td>
    <td><code>object</code></td>
    <td>The Amazon S3 location of a file that provides any errors or warnings that were produced by your input file. This file was created when Amazon Translate attempted to update a parallel data resource. The location is returned as a presigned URL to that has a 30-minute expiration.</td>
</tr>
<tr>
    <td><CopyableCode code="ParallelDataProperties" /></td>
    <td><code>object</code></td>
    <td>The properties of the parallel data resource that is being retrieved.</td>
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
    <td><a href="#get_parallel_data"><CopyableCode code="get_parallel_data" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides information about a parallel data resource.</td>
</tr>
<tr>
    <td><a href="#create_parallel_data"><CopyableCode code="create_parallel_data" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ParallelDataConfig"><code>ParallelDataConfig</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td></td>
    <td>Creates a parallel data resource in Amazon Translate by importing an input file from Amazon S3. Parallel data files contain examples that show how you want segments of text to be translated. By adding parallel data, you can influence the style, tone, and word choice in your translation output.</td>
</tr>
<tr>
    <td><a href="#update_parallel_data"><CopyableCode code="update_parallel_data" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ParallelDataConfig"><code>ParallelDataConfig</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td></td>
    <td>Updates a previously created parallel data resource by importing a new input file from Amazon S3.</td>
</tr>
<tr>
    <td><a href="#delete_parallel_data"><CopyableCode code="delete_parallel_data" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a parallel data resource in Amazon Translate.</td>
</tr>
<tr>
    <td><a href="#list_parallel_data"><CopyableCode code="list_parallel_data" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a list of your parallel data resources in Amazon Translate.</td>
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

## `SELECT` examples

<Tabs
    defaultValue="get_parallel_data"
    values={[
        { label: 'get_parallel_data', value: 'get_parallel_data' }
    ]}
>
<TabItem value="get_parallel_data">

Provides information about a parallel data resource.

```sql
SELECT
AuxiliaryDataLocation,
DataLocation,
LatestUpdateAttemptAuxiliaryDataLocation,
ParallelDataProperties
FROM aws.translate.parallel_datas
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_parallel_data"
    values={[
        { label: 'create_parallel_data', value: 'create_parallel_data' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_parallel_data">

Creates a parallel data resource in Amazon Translate by importing an input file from Amazon S3. Parallel data files contain examples that show how you want segments of text to be translated. By adding parallel data, you can influence the style, tone, and word choice in your translation output.

```sql
INSERT INTO aws.translate.parallel_datas (
Name,
Description,
ParallelDataConfig,
EncryptionKey,
ClientToken,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ ParallelDataConfig }}' /* required */,
'{{ EncryptionKey }}',
'{{ ClientToken }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
Name,
Status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: parallel_datas
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the parallel_datas resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        A custom name for the parallel data resource in Amazon Translate. You must assign a name that is unique in the account and region.
    - name: Description
      value: "{{ Description }}"
      description: |
        A custom description for the parallel data resource in Amazon Translate.
    - name: ParallelDataConfig
      description: |
        Specifies the format and S3 location of the parallel data input file.
      value:
        S3Uri: "{{ S3Uri }}"
        Format: "{{ Format }}"
    - name: EncryptionKey
      description: |
        The encryption key used to encrypt this object.
      value:
        Type: "{{ Type }}"
        Id: "{{ Id }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A unique identifier for the request. This token is automatically generated when you use Amazon Translate through an AWS SDK.
    - name: Tags
      description: |
        Tags to be associated with this resource. A tag is a key-value pair that adds metadata to a resource. Each tag key for the resource must be unique. For more information, see Tagging your resources.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_parallel_data"
    values={[
        { label: 'update_parallel_data', value: 'update_parallel_data' }
    ]}
>
<TabItem value="update_parallel_data">

Updates a previously created parallel data resource by importing a new input file from Amazon S3.

```sql
UPDATE aws.translate.parallel_datas
SET 
Name = '{{ Name }}',
Description = '{{ Description }}',
ParallelDataConfig = '{{ ParallelDataConfig }}',
ClientToken = '{{ ClientToken }}'
WHERE 
region = '{{ region }}' --required
AND ParallelDataConfig = '{{ ParallelDataConfig }}' --required
AND ClientToken = '{{ ClientToken }}' --required
RETURNING
LatestUpdateAttemptAt,
LatestUpdateAttemptStatus,
Name,
Status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_parallel_data"
    values={[
        { label: 'delete_parallel_data', value: 'delete_parallel_data' }
    ]}
>
<TabItem value="delete_parallel_data">

Deletes a parallel data resource in Amazon Translate.

```sql
DELETE FROM aws.translate.parallel_datas
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_parallel_data"
    values={[
        { label: 'list_parallel_data', value: 'list_parallel_data' }
    ]}
>
<TabItem value="list_parallel_data">

Provides a list of your parallel data resources in Amazon Translate.

```sql
EXEC aws.translate.parallel_datas.list_parallel_data 
@region='{{ region }}' --required 
@@json=
'{
"NextToken": "{{ NextToken }}", 
"MaxResults": {{ MaxResults }}
}'
;
```
</TabItem>
</Tabs>
