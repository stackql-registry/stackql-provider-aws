--- 
title: read_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - read_sets
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

Creates, updates, deletes, gets or lists a <code>read_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="read_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.omics.read_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_read_set"
    values={[
        { label: 'get_read_set', value: 'get_read_set' },
        { label: 'list_read_sets', value: 'list_read_sets' }
    ]}
>
<TabItem value="get_read_set">

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
    <td>The read set file payload.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_read_sets">

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
    <td>The read set's ID. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The read set's name. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The read set's ARN. (pattern: &lt;code&gt;arn:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the read set was created.</td>
</tr>
<tr>
    <td><CopyableCode code="creationType" /></td>
    <td><code>string</code></td>
    <td>The creation type of the read set. (IMPORT, UPLOAD)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The read set's description. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>object</code></td>
    <td>The entity tag (ETag) is a hash of the object representing its semantic content.</td>
</tr>
<tr>
    <td><CopyableCode code="fileType" /></td>
    <td><code>string</code></td>
    <td>The read set's file type. (FASTQ, BAM, CRAM, UBAM)</td>
</tr>
<tr>
    <td><CopyableCode code="referenceArn" /></td>
    <td><code>string</code></td>
    <td>The read set's genome reference ARN. (pattern: &lt;code&gt;arn:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sampleId" /></td>
    <td><code>string</code></td>
    <td>The read set's sample ID. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sequenceInformation" /></td>
    <td><code>object</code></td>
    <td>Details about a sequence.</td>
</tr>
<tr>
    <td><CopyableCode code="sequenceStoreId" /></td>
    <td><code>string</code></td>
    <td>The read set's sequence store ID. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The read set's status. (ARCHIVED, ACTIVATING, ACTIVE, DELETING, DELETED, PROCESSING_UPLOAD, UPLOAD_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>The status for a read set. It provides more detail as to why the read set has a status. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="subjectId" /></td>
    <td><code>string</code></td>
    <td>The read set's subject ID. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_read_set"><CopyableCode code="get_read_set" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-sequence_store_id"><code>sequence_store_id</code></a>, <a href="#parameter-partNumber"><code>partNumber</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-file"><code>file</code></a></td>
    <td>Retrieves detailed information from parts of a read set and returns the read set in the same format that it was uploaded. You must have read sets uploaded to your sequence store in order to run this operation.</td>
</tr>
<tr>
    <td><a href="#list_read_sets"><CopyableCode code="list_read_sets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-sequence_store_id"><code>sequence_store_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves a list of read sets from a sequence store ID and returns the metadata in JSON format.</td>
</tr>
<tr>
    <td><a href="#start_read_set_activation_job"><CopyableCode code="start_read_set_activation_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-sequence_store_id"><code>sequence_store_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sources"><code>sources</code></a></td>
    <td></td>
    <td>Activates an archived read set and returns its metadata in a JSON formatted output. AWS HealthOmics automatically archives unused read sets after 30 days. To monitor the status of your read set activation job, use the GetReadSetActivationJob operation. To learn more, see Activating read sets in the Amazon Web Services HealthOmics User Guide.</td>
</tr>
<tr>
    <td><a href="#start_read_set_export_job"><CopyableCode code="start_read_set_export_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-sequence_store_id"><code>sequence_store_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-destination"><code>destination</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a>, <a href="#parameter-sources"><code>sources</code></a></td>
    <td></td>
    <td>Starts a read set export job. When the export job is finished, the read set is exported to an Amazon S3 bucket which can be retrieved using the GetReadSetExportJob API operation. To monitor the status of the export job, use the ListReadSetExportJobs API operation.</td>
</tr>
<tr>
    <td><a href="#start_read_set_import_job"><CopyableCode code="start_read_set_import_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-sequence_store_id"><code>sequence_store_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a>, <a href="#parameter-sources"><code>sources</code></a></td>
    <td></td>
    <td>Imports a read set from the sequence store. Read set import jobs support a maximum of 100 read sets of different types. Monitor the progress of your read set import job by calling the GetReadSetImportJob API operation.</td>
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
    <td>The read set's ID.</td>
</tr>
<tr id="parameter-partNumber">
    <td><CopyableCode code="partNumber" /></td>
    <td><code>integer</code></td>
    <td>The part number to retrieve.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-sequence_store_id">
    <td><CopyableCode code="sequence_store_id" /></td>
    <td><code>string</code></td>
    <td>The read set's sequence store ID.</td>
</tr>
<tr id="parameter-file">
    <td><CopyableCode code="file" /></td>
    <td><code>string</code></td>
    <td>The file to retrieve.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of read sets to return in one page of results.</td>
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
    defaultValue="get_read_set"
    values={[
        { label: 'get_read_set', value: 'get_read_set' },
        { label: 'list_read_sets', value: 'list_read_sets' }
    ]}
>
<TabItem value="get_read_set">

Retrieves detailed information from parts of a read set and returns the read set in the same format that it was uploaded. You must have read sets uploaded to your sequence store in order to run this operation.

```sql
SELECT
payload
FROM aws.omics.read_sets
WHERE id = '{{ id }}' -- required
AND sequence_store_id = '{{ sequence_store_id }}' -- required
AND partNumber = '{{ partNumber }}' -- required
AND region = '{{ region }}' -- required
AND file = '{{ file }}'
;
```
</TabItem>
<TabItem value="list_read_sets">

Retrieves a list of read sets from a sequence store ID and returns the metadata in JSON format.

```sql
SELECT
id,
name,
arn,
creationTime,
creationType,
description,
etag,
fileType,
referenceArn,
sampleId,
sequenceInformation,
sequenceStoreId,
status,
statusMessage,
subjectId
FROM aws.omics.read_sets
WHERE sequence_store_id = '{{ sequence_store_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_read_set_activation_job"
    values={[
        { label: 'start_read_set_activation_job', value: 'start_read_set_activation_job' },
        { label: 'start_read_set_export_job', value: 'start_read_set_export_job' },
        { label: 'start_read_set_import_job', value: 'start_read_set_import_job' }
    ]}
>
<TabItem value="start_read_set_activation_job">

Activates an archived read set and returns its metadata in a JSON formatted output. AWS HealthOmics automatically archives unused read sets after 30 days. To monitor the status of your read set activation job, use the GetReadSetActivationJob operation. To learn more, see Activating read sets in the Amazon Web Services HealthOmics User Guide.

```sql
EXEC aws.omics.read_sets.start_read_set_activation_job 
@sequence_store_id='{{ sequence_store_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"clientToken": "{{ clientToken }}", 
"sources": "{{ sources }}"
}'
;
```
</TabItem>
<TabItem value="start_read_set_export_job">

Starts a read set export job. When the export job is finished, the read set is exported to an Amazon S3 bucket which can be retrieved using the GetReadSetExportJob API operation. To monitor the status of the export job, use the ListReadSetExportJobs API operation.

```sql
EXEC aws.omics.read_sets.start_read_set_export_job 
@sequence_store_id='{{ sequence_store_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"destination": "{{ destination }}", 
"roleArn": "{{ roleArn }}", 
"clientToken": "{{ clientToken }}", 
"sources": "{{ sources }}"
}'
;
```
</TabItem>
<TabItem value="start_read_set_import_job">

Imports a read set from the sequence store. Read set import jobs support a maximum of 100 read sets of different types. Monitor the progress of your read set import job by calling the GetReadSetImportJob API operation.

```sql
EXEC aws.omics.read_sets.start_read_set_import_job 
@sequence_store_id='{{ sequence_store_id }}' --required, 
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
