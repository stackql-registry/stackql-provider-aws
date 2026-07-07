--- 
title: references
hide_title: false
hide_table_of_contents: false
keywords:
  - references
  - omics
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

Creates, updates, deletes, gets or lists a <code>references</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="references" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.omics.references" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_reference"
    values={[
        { label: 'get_reference', value: 'get_reference' },
        { label: 'list_references', value: 'list_references' }
    ]}
>
<TabItem value="get_reference">

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
    <td><CopyableCode code="payload" /></td>
    <td><code>string (byte)</code></td>
    <td>The reference file payload.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_references">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The reference's ID. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The reference's name. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The reference's ARN. (pattern: &lt;code&gt;arn:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the reference was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The reference's description. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="md5" /></td>
    <td><code>string</code></td>
    <td>The reference's MD5 checksum. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;N&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="referenceStoreId" /></td>
    <td><code>string</code></td>
    <td>The reference's store ID. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The reference's status. (ACTIVE, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the reference was updated.</td>
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
    <td><a href="#get_reference"><CopyableCode code="get_reference" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-reference_store_id"><code>reference_store_id</code></a>, <a href="#parameter-partNumber"><code>partNumber</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Range"><code>Range</code></a>, <a href="#parameter-file"><code>file</code></a></td>
    <td>Downloads parts of data from a reference genome and returns the reference file in the same format that it was uploaded. For more information, see Creating a HealthOmics reference store in the Amazon Web Services HealthOmics User Guide.</td>
</tr>
<tr>
    <td><a href="#list_references"><CopyableCode code="list_references" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-reference_store_id"><code>reference_store_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves the metadata of one or more reference genomes in a reference store. For more information, see Creating a reference store in the Amazon Web Services HealthOmics User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_reference"><CopyableCode code="delete_reference" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-reference_store_id"><code>reference_store_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a reference genome and returns a response with no body if the operation is successful. The read set associated with the reference genome must first be deleted before deleting the reference genome. After the reference genome is deleted, you can delete the reference store using the DeleteReferenceStore API operation. For more information, see Deleting HealthOmics reference and sequence stores in the Amazon Web Services HealthOmics User Guide.</td>
</tr>
<tr>
    <td><a href="#start_reference_import_job"><CopyableCode code="start_reference_import_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-reference_store_id"><code>reference_store_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a>, <a href="#parameter-sources"><code>sources</code></a></td>
    <td></td>
    <td>Imports a reference genome from Amazon S3 into a specified reference store. You can have multiple reference genomes in a reference store. You can only import reference genomes one at a time into each reference store. Monitor the status of your reference import job by using the GetReferenceImportJob API operation.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The reference's ID.</td>
</tr>
<tr id="parameter-partNumber">
    <td><CopyableCode code="partNumber" /></td>
    <td><code>integer</code></td>
    <td>The part number to retrieve.</td>
</tr>
<tr id="parameter-reference_store_id">
    <td><CopyableCode code="reference_store_id" /></td>
    <td><code>string</code></td>
    <td>The job's reference store ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Range">
    <td><CopyableCode code="Range" /></td>
    <td><code>string</code></td>
    <td>The range to retrieve.</td>
</tr>
<tr id="parameter-file">
    <td><CopyableCode code="file" /></td>
    <td><code>string</code></td>
    <td>The file to retrieve.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of references to return in one page of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Specify the pagination token from a previous request to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_reference"
    values={[
        { label: 'get_reference', value: 'get_reference' },
        { label: 'list_references', value: 'list_references' }
    ]}
>
<TabItem value="get_reference">

Downloads parts of data from a reference genome and returns the reference file in the same format that it was uploaded. For more information, see Creating a HealthOmics reference store in the Amazon Web Services HealthOmics User Guide.

```sql
SELECT
payload
FROM aws.omics.references
WHERE id = '{{ id }}' -- required
AND reference_store_id = '{{ reference_store_id }}' -- required
AND partNumber = '{{ partNumber }}' -- required
AND region = '{{ region }}' -- required
AND Range = '{{ Range }}'
AND file = '{{ file }}'
;
```
</TabItem>
<TabItem value="list_references">

Retrieves the metadata of one or more reference genomes in a reference store. For more information, see Creating a reference store in the Amazon Web Services HealthOmics User Guide.

```sql
SELECT
id,
name,
arn,
creationTime,
description,
md5,
referenceStoreId,
status,
updateTime
FROM aws.omics.references
WHERE reference_store_id = '{{ reference_store_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_reference"
    values={[
        { label: 'delete_reference', value: 'delete_reference' }
    ]}
>
<TabItem value="delete_reference">

Deletes a reference genome and returns a response with no body if the operation is successful. The read set associated with the reference genome must first be deleted before deleting the reference genome. After the reference genome is deleted, you can delete the reference store using the DeleteReferenceStore API operation. For more information, see Deleting HealthOmics reference and sequence stores in the Amazon Web Services HealthOmics User Guide.

```sql
DELETE FROM aws.omics.references
WHERE id = '{{ id }}' --required
AND reference_store_id = '{{ reference_store_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_reference_import_job"
    values={[
        { label: 'start_reference_import_job', value: 'start_reference_import_job' }
    ]}
>
<TabItem value="start_reference_import_job">

Imports a reference genome from Amazon S3 into a specified reference store. You can have multiple reference genomes in a reference store. You can only import reference genomes one at a time into each reference store. Monitor the status of your reference import job by using the GetReferenceImportJob API operation.

```sql
EXEC aws.omics.references.start_reference_import_job 
@reference_store_id='{{ reference_store_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"roleArn": "{{ roleArn }}", 
"clientToken": "{{ clientToken }}", 
"sources": "{{ sources }}"
}'
;
```
</TabItem>
</Tabs>
