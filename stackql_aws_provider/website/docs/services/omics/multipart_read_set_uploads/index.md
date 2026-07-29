--- 
title: multipart_read_set_uploads
hide_title: false
hide_table_of_contents: false
keywords:
  - multipart_read_set_uploads
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

Creates, updates, deletes, gets or lists a <code>multipart_read_set_uploads</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="multipart_read_set_uploads" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.omics.multipart_read_set_uploads" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_multipart_read_set_uploads"
    values={[
        { label: 'list_multipart_read_set_uploads', value: 'list_multipart_read_set_uploads' }
    ]}
>
<TabItem value="list_multipart_read_set_uploads">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of a read set. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time stamp for when a direct upload was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of a read set. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="generated_from" /></td>
    <td><code>string</code></td>
    <td>The source of an uploaded part. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="reference_arn" /></td>
    <td><code>string</code></td>
    <td>The source's reference ARN. (pattern: &lt;code&gt;arn:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sample_id" /></td>
    <td><code>string</code></td>
    <td>The read set source's sample ID. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sequence_store_id" /></td>
    <td><code>string</code></td>
    <td>The sequence store ID used for the multipart upload. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source_file_type" /></td>
    <td><code>string</code></td>
    <td>The type of file the read set originated from. (FASTQ, BAM, CRAM, UBAM)</td>
</tr>
<tr>
    <td><CopyableCode code="subject_id" /></td>
    <td><code>string</code></td>
    <td>The read set source's subject ID. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Any tags you wish to add to a read set.</td>
</tr>
<tr>
    <td><CopyableCode code="upload_id" /></td>
    <td><code>string</code></td>
    <td>The ID for the initiated multipart upload. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#list_multipart_read_set_uploads"><CopyableCode code="list_multipart_read_set_uploads" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-sequence_store_id"><code>sequence_store_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists in-progress multipart read set uploads for a sequence store and returns it in a JSON formatted output. Multipart read set uploads are initiated by the CreateMultipartReadSetUploads API operation. This operation returns a response with no body when the upload is complete.</td>
</tr>
<tr>
    <td><a href="#create_multipart_read_set_upload"><CopyableCode code="create_multipart_read_set_upload" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-sequence_store_id"><code>sequence_store_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sourceFileType"><code>sourceFileType</code></a>, <a href="#parameter-subjectId"><code>subjectId</code></a>, <a href="#parameter-sampleId"><code>sampleId</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Initiates a multipart read set upload for uploading partitioned source files into a sequence store. You can directly import source files from an EC2 instance and other local compute, or from an S3 bucket. To separate these source files into parts, use the split operation. Each part cannot be larger than 100 MB. If the operation is successful, it provides an uploadId which is required by the UploadReadSetPart API operation to upload parts into a sequence store. To continue uploading a multipart read set into your sequence store, you must use the UploadReadSetPart API operation to upload each part individually following the steps below: Specify the uploadId obtained from the previous call to CreateMultipartReadSetUpload. Upload parts for that uploadId. When you have finished uploading parts, use the CompleteMultipartReadSetUpload API to complete the multipart read set upload and to retrieve the final read set IDs in the response. To learn more about creating parts and the split operation, see Direct upload to a sequence store in the Amazon Web Services HealthOmics User Guide.</td>
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
<tr id="parameter-sequence_store_id">
    <td><CopyableCode code="sequence_store_id" /></td>
    <td><code>string</code></td>
    <td>The sequence store ID for the store that is the destination of the multipart uploads.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of multipart uploads returned in a page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Next token returned in the response of a previous ListMultipartReadSetUploads call. Used to get the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_multipart_read_set_uploads"
    values={[
        { label: 'list_multipart_read_set_uploads', value: 'list_multipart_read_set_uploads' }
    ]}
>
<TabItem value="list_multipart_read_set_uploads">

Lists in-progress multipart read set uploads for a sequence store and returns it in a JSON formatted output. Multipart read set uploads are initiated by the CreateMultipartReadSetUploads API operation. This operation returns a response with no body when the upload is complete.

```sql
SELECT
name,
creation_time,
description,
generated_from,
reference_arn,
sample_id,
sequence_store_id,
source_file_type,
subject_id,
tags,
upload_id
FROM aws.omics.multipart_read_set_uploads
WHERE sequence_store_id = '{{ sequence_store_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_multipart_read_set_upload"
    values={[
        { label: 'create_multipart_read_set_upload', value: 'create_multipart_read_set_upload' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_multipart_read_set_upload">

Initiates a multipart read set upload for uploading partitioned source files into a sequence store. You can directly import source files from an EC2 instance and other local compute, or from an S3 bucket. To separate these source files into parts, use the split operation. Each part cannot be larger than 100 MB. If the operation is successful, it provides an uploadId which is required by the UploadReadSetPart API operation to upload parts into a sequence store. To continue uploading a multipart read set into your sequence store, you must use the UploadReadSetPart API operation to upload each part individually following the steps below: Specify the uploadId obtained from the previous call to CreateMultipartReadSetUpload. Upload parts for that uploadId. When you have finished uploading parts, use the CompleteMultipartReadSetUpload API to complete the multipart read set upload and to retrieve the final read set IDs in the response. To learn more about creating parts and the split operation, see Direct upload to a sequence store in the Amazon Web Services HealthOmics User Guide.

```sql
INSERT INTO aws.omics.multipart_read_set_uploads (
clientToken,
sourceFileType,
subjectId,
sampleId,
generatedFrom,
referenceArn,
name,
description,
tags,
sequence_store_id,
region
)
SELECT 
'{{ clientToken }}',
'{{ sourceFileType }}' /* required */,
'{{ subjectId }}' /* required */,
'{{ sampleId }}' /* required */,
'{{ generatedFrom }}',
'{{ referenceArn }}',
'{{ name }}' /* required */,
'{{ description }}',
'{{ tags }}',
'{{ sequence_store_id }}',
'{{ region }}'
RETURNING
name,
creation_time,
description,
generated_from,
reference_arn,
sample_id,
sequence_store_id,
source_file_type,
subject_id,
tags,
upload_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: multipart_read_set_uploads
  props:
    - name: sequence_store_id
      value: "{{ sequence_store_id }}"
      description: Required parameter for the multipart_read_set_uploads resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the multipart_read_set_uploads resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: sourceFileType
      value: "{{ sourceFileType }}"
      valid_values: ['FASTQ', 'BAM', 'CRAM', 'UBAM']
    - name: subjectId
      value: "{{ subjectId }}"
    - name: sampleId
      value: "{{ sampleId }}"
    - name: generatedFrom
      value: "{{ generatedFrom }}"
    - name: referenceArn
      value: "{{ referenceArn }}"
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>
