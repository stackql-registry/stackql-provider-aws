--- 
title: datasets
hide_title: false
hide_table_of_contents: false
keywords:
  - datasets
  - databrew
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

Creates, updates, deletes, gets or lists a <code>datasets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="datasets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.databrew.datasets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_dataset"
    values={[
        { label: 'describe_dataset', value: 'describe_dataset' },
        { label: 'list_datasets', value: 'list_datasets' }
    ]}
>
<TabItem value="describe_dataset">

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
    <td><CopyableCode code="CreateDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the dataset was created.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedBy" /></td>
    <td><code>string</code></td>
    <td>The identifier (user name) of the user who created the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="Format" /></td>
    <td><code>string</code></td>
    <td>The file format of a dataset that is created from an Amazon S3 file or folder. (CSV, JSON, PARQUET, EXCEL, ORC)</td>
</tr>
<tr>
    <td><CopyableCode code="FormatOptions" /></td>
    <td><code>object</code></td>
    <td>Represents a set of options that define the structure of either comma-separated value (CSV), Excel, or JSON input.</td>
</tr>
<tr>
    <td><CopyableCode code="Input" /></td>
    <td><code>object</code></td>
    <td>Represents information on how DataBrew can find data, in either the Glue Data Catalog or Amazon S3.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedBy" /></td>
    <td><code>string</code></td>
    <td>The identifier (user name) of the user who last modified the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the dataset was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="PathOptions" /></td>
    <td><code>object</code></td>
    <td>Represents a set of options that define how DataBrew selects files for a given Amazon S3 path in a dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="Source" /></td>
    <td><code>string</code></td>
    <td>The location of the data for this dataset, Amazon S3 or the Glue Data Catalog. (S3, DATA-CATALOG, DATABASE)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>Metadata tags associated with this dataset.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_datasets">

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
    <td><CopyableCode code="AccountId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="CreateDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the dataset was created.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedBy" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user who created the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="Format" /></td>
    <td><code>string</code></td>
    <td>The file format of a dataset that is created from an Amazon S3 file or folder. (CSV, JSON, PARQUET, EXCEL, ORC)</td>
</tr>
<tr>
    <td><CopyableCode code="FormatOptions" /></td>
    <td><code>object</code></td>
    <td>Represents a set of options that define the structure of either comma-separated value (CSV), Excel, or JSON input.</td>
</tr>
<tr>
    <td><CopyableCode code="Input" /></td>
    <td><code>object</code></td>
    <td>Represents information on how DataBrew can find data, in either the Glue Data Catalog or Amazon S3.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedBy" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user who last modified the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last modification date and time of the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="PathOptions" /></td>
    <td><code>object</code></td>
    <td>Represents a set of options that define how DataBrew selects files for a given Amazon S3 path in a dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceArn" /></td>
    <td><code>string</code></td>
    <td>The unique Amazon Resource Name (ARN) for the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="Source" /></td>
    <td><code>string</code></td>
    <td>The location of the data for the dataset, either Amazon S3 or the Glue Data Catalog. (S3, DATA-CATALOG, DATABASE)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>Metadata tags that have been applied to the dataset.</td>
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
    <td><a href="#describe_dataset"><CopyableCode code="describe_dataset" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the definition of a specific DataBrew dataset.</td>
</tr>
<tr>
    <td><a href="#list_datasets"><CopyableCode code="list_datasets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all of the DataBrew datasets.</td>
</tr>
<tr>
    <td><a href="#create_dataset"><CopyableCode code="create_dataset" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new DataBrew dataset.</td>
</tr>
<tr>
    <td><a href="#update_dataset"><CopyableCode code="update_dataset" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Modifies the definition of an existing DataBrew dataset.</td>
</tr>
<tr>
    <td><a href="#delete_dataset"><CopyableCode code="delete_dataset" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a dataset from DataBrew.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the dataset to be deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in this request.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned by a previous call to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_dataset"
    values={[
        { label: 'describe_dataset', value: 'describe_dataset' },
        { label: 'list_datasets', value: 'list_datasets' }
    ]}
>
<TabItem value="describe_dataset">

Returns the definition of a specific DataBrew dataset.

```sql
SELECT
CreateDate,
CreatedBy,
Format,
FormatOptions,
Input,
LastModifiedBy,
LastModifiedDate,
Name,
PathOptions,
ResourceArn,
Source,
Tags
FROM aws.databrew.datasets
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_datasets">

Lists all of the DataBrew datasets.

```sql
SELECT
AccountId,
CreateDate,
CreatedBy,
Format,
FormatOptions,
Input,
LastModifiedBy,
LastModifiedDate,
Name,
PathOptions,
ResourceArn,
Source,
Tags
FROM aws.databrew.datasets
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_dataset"
    values={[
        { label: 'create_dataset', value: 'create_dataset' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_dataset">

Creates a new DataBrew dataset.

```sql
INSERT INTO aws.databrew.datasets (
Name,
Format,
FormatOptions,
Input,
PathOptions,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ Format }}',
'{{ FormatOptions }}',
'{{ Input }}',
'{{ PathOptions }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
Name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: datasets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the datasets resource.
    - name: Name
      value: "{{ Name }}"
    - name: Format
      value: "{{ Format }}"
      valid_values: ['CSV', 'JSON', 'PARQUET', 'EXCEL', 'ORC']
    - name: FormatOptions
      description: |
        Represents a set of options that define the structure of either comma-separated value (CSV), Excel, or JSON input.
      value:
        Json:
          MultiLine: {{ MultiLine }}
        Excel:
          SheetNames:
            - "{{ SheetNames }}"
          SheetIndexes:
            - {{ SheetIndexes }}
          HeaderRow: {{ HeaderRow }}
        Csv:
          Delimiter: "{{ Delimiter }}"
          HeaderRow: {{ HeaderRow }}
    - name: Input
      description: |
        Represents information on how DataBrew can find data, in either the Glue Data Catalog or Amazon S3.
      value:
        S3InputDefinition:
          Bucket: "{{ Bucket }}"
          Key: "{{ Key }}"
          BucketOwner: "{{ BucketOwner }}"
        DataCatalogInputDefinition:
          CatalogId: "{{ CatalogId }}"
          DatabaseName: "{{ DatabaseName }}"
          TableName: "{{ TableName }}"
          TempDirectory:
            Bucket: "{{ Bucket }}"
            Key: "{{ Key }}"
            BucketOwner: "{{ BucketOwner }}"
        DatabaseInputDefinition:
          GlueConnectionName: "{{ GlueConnectionName }}"
          DatabaseTableName: "{{ DatabaseTableName }}"
          TempDirectory:
            Bucket: "{{ Bucket }}"
            Key: "{{ Key }}"
            BucketOwner: "{{ BucketOwner }}"
          QueryString: "{{ QueryString }}"
        Metadata:
          SourceArn: "{{ SourceArn }}"
    - name: PathOptions
      description: |
        Represents a set of options that define how DataBrew selects files for a given Amazon S3 path in a dataset.
      value:
        LastModifiedDateCondition:
          Expression: "{{ Expression }}"
          ValuesMap: "{{ ValuesMap }}"
        FilesLimit:
          MaxFiles: {{ MaxFiles }}
          OrderedBy: "{{ OrderedBy }}"
          Order: "{{ Order }}"
        Parameters: "{{ Parameters }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_dataset"
    values={[
        { label: 'update_dataset', value: 'update_dataset' }
    ]}
>
<TabItem value="update_dataset">

Modifies the definition of an existing DataBrew dataset.

```sql
UPDATE aws.databrew.datasets
SET 
Format = '{{ Format }}',
FormatOptions = '{{ FormatOptions }}',
Input = '{{ Input }}',
PathOptions = '{{ PathOptions }}'
WHERE 
name = '{{ name }}' --required
AND region = '{{ region }}' --required
RETURNING
Name;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_dataset"
    values={[
        { label: 'delete_dataset', value: 'delete_dataset' }
    ]}
>
<TabItem value="delete_dataset">

Deletes a dataset from DataBrew.

```sql
DELETE FROM aws.databrew.datasets
WHERE name = '{{ name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
