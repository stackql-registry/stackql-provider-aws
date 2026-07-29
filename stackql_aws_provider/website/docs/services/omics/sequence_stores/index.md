--- 
title: sequence_stores
hide_title: false
hide_table_of_contents: false
keywords:
  - sequence_stores
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

Creates, updates, deletes, gets or lists a <code>sequence_stores</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sequence_stores" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.omics.sequence_stores" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sequence_store"
    values={[
        { label: 'get_sequence_store', value: 'get_sequence_store' },
        { label: 'list_sequence_stores', value: 'list_sequence_stores' }
    ]}
>
<TabItem value="get_sequence_store">

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
    <td>The store's ID. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The store's name. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The store's ARN. (pattern: &lt;code&gt;arn:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the store was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The store's description. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="e_tag_algorithm_family" /></td>
    <td><code>string</code></td>
    <td>The algorithm family of the ETag. (MD5up, SHA256up, SHA512up)</td>
</tr>
<tr>
    <td><CopyableCode code="fallback_location" /></td>
    <td><code>string</code></td>
    <td>An S3 location that is used to store files that have failed a direct upload. (pattern: &lt;code&gt;$|^s3:​//(&#91;a-z0-9&#93;&#91;a-z0-9-.&#93;&#123;1,61&#125;&#91;a-z0-9&#93;)/?((.&#123;1,1024&#125;)/)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="propagated_set_level_tags" /></td>
    <td><code>array</code></td>
    <td>The tags keys to propagate to the S3 objects associated with read sets in the sequence store.</td>
</tr>
<tr>
    <td><CopyableCode code="s_3_access" /></td>
    <td><code>object</code></td>
    <td>The S3 access metadata of the sequence store.</td>
</tr>
<tr>
    <td><CopyableCode code="sse_config" /></td>
    <td><code>object</code></td>
    <td>Server-side encryption (SSE) settings for a store.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the sequence store. (CREATING, ACTIVE, UPDATING, DELETING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>The status message of the sequence store. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last-updated time of the sequence store.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_sequence_stores">

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
    <td>The store's ID. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The store's name. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The store's ARN. (pattern: &lt;code&gt;arn:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the store was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The store's description. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="e_tag_algorithm_family" /></td>
    <td><code>string</code></td>
    <td>The algorithm family of the ETag. (MD5up, SHA256up, SHA512up)</td>
</tr>
<tr>
    <td><CopyableCode code="fallback_location" /></td>
    <td><code>string</code></td>
    <td>An S3 location that is used to store files that have failed a direct upload. (pattern: &lt;code&gt;$|^s3:​//(&#91;a-z0-9&#93;&#91;a-z0-9-.&#93;&#123;1,61&#125;&#91;a-z0-9&#93;)/?((.&#123;1,1024&#125;)/)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sse_config" /></td>
    <td><code>object</code></td>
    <td>Server-side encryption (SSE) settings for a store.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the sequence store. (CREATING, ACTIVE, UPDATING, DELETING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>The status message of the sequence store. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last-updated time of the Sequence Store.</td>
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
    <td><a href="#get_sequence_store"><CopyableCode code="get_sequence_store" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves metadata for a sequence store using its ID and returns it in JSON format.</td>
</tr>
<tr>
    <td><a href="#list_sequence_stores"><CopyableCode code="list_sequence_stores" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves a list of sequence stores and returns each sequence store's metadata. For more information, see Creating a HealthOmics sequence store in the Amazon Web Services HealthOmics User Guide.</td>
</tr>
<tr>
    <td><a href="#create_sequence_store"><CopyableCode code="create_sequence_store" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a sequence store and returns its metadata. Sequence stores are used to store sequence data files called read sets that are saved in FASTQ, BAM, uBAM, or CRAM formats. For aligned formats (BAM and CRAM), a sequence store can only use one reference genome. For unaligned formats (FASTQ and uBAM), a reference genome is not required. You can create multiple sequence stores per region per account. The following are optional parameters you can specify for your sequence store: Use s3AccessConfig to configure your sequence store with S3 access logs (recommended). Use sseConfig to define your own KMS key for encryption. Use eTagAlgorithmFamily to define which algorithm to use for the HealthOmics eTag on objects. Use fallbackLocation to define a backup location for storing files that have failed a direct upload. Use propagatedSetLevelTags to configure tags that propagate to all objects in your store. For more information, see Creating a HealthOmics sequence store in the Amazon Web Services HealthOmics User Guide.</td>
</tr>
<tr>
    <td><a href="#update_sequence_store"><CopyableCode code="update_sequence_store" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update one or more parameters for the sequence store.</td>
</tr>
<tr>
    <td><a href="#delete_sequence_store"><CopyableCode code="delete_sequence_store" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a sequence store and returns a response with no body if the operation is successful. You can only delete a sequence store when it does not contain any read sets. Use the BatchDeleteReadSet API operation to ensure that all read sets in the sequence store are deleted. When a sequence store is deleted, all tags associated with the store are also deleted. For more information, see Deleting HealthOmics reference and sequence stores in the Amazon Web Services HealthOmics User Guide.</td>
</tr>
<tr>
    <td><a href="#abort_multipart_read_set_upload"><CopyableCode code="abort_multipart_read_set_upload" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-sequence_store_id"><code>sequence_store_id</code></a>, <a href="#parameter-upload_id"><code>upload_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stops a multipart read set upload into a sequence store and returns a response with no body if the operation is successful. To confirm that a multipart read set upload has been stopped, use the ListMultipartReadSetUploads API operation to view all active multipart read set uploads.</td>
</tr>
<tr>
    <td><a href="#complete_multipart_read_set_upload"><CopyableCode code="complete_multipart_read_set_upload" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-sequence_store_id"><code>sequence_store_id</code></a>, <a href="#parameter-upload_id"><code>upload_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-parts"><code>parts</code></a></td>
    <td></td>
    <td>Completes a multipart read set upload into a sequence store after you have initiated the upload process with CreateMultipartReadSetUpload and uploaded all read set parts using UploadReadSetPart. You must specify the parts you uploaded using the parts parameter. If the operation is successful, it returns the read set ID(s) of the uploaded read set(s). For more information, see Direct upload to a sequence store in the Amazon Web Services HealthOmics User Guide.</td>
</tr>
<tr>
    <td><a href="#upload_read_set_part"><CopyableCode code="upload_read_set_part" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-sequence_store_id"><code>sequence_store_id</code></a>, <a href="#parameter-upload_id"><code>upload_id</code></a>, <a href="#parameter-partSource"><code>partSource</code></a>, <a href="#parameter-partNumber"><code>partNumber</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-payload"><code>payload</code></a></td>
    <td></td>
    <td>Uploads a specific part of a read set into a sequence store. When you a upload a read set part with a part number that already exists, the new part replaces the existing one. This operation returns a JSON formatted response containing a string identifier that is used to confirm that parts are being added to the intended upload. For more information, see Direct upload to a sequence store in the Amazon Web Services HealthOmics User Guide.</td>
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
    <td>The sequence store's ID.</td>
</tr>
<tr id="parameter-partNumber">
    <td><CopyableCode code="partNumber" /></td>
    <td><code>integer</code></td>
    <td>The number of the part being uploaded.</td>
</tr>
<tr id="parameter-partSource">
    <td><CopyableCode code="partSource" /></td>
    <td><code>string</code></td>
    <td>The source file for an upload part.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-sequence_store_id">
    <td><CopyableCode code="sequence_store_id" /></td>
    <td><code>string</code></td>
    <td>The Sequence Store ID used for the multipart upload.</td>
</tr>
<tr id="parameter-upload_id">
    <td><CopyableCode code="upload_id" /></td>
    <td><code>string</code></td>
    <td>The ID for the initiated multipart upload.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of stores to return in one page of results.</td>
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
    defaultValue="get_sequence_store"
    values={[
        { label: 'get_sequence_store', value: 'get_sequence_store' },
        { label: 'list_sequence_stores', value: 'list_sequence_stores' }
    ]}
>
<TabItem value="get_sequence_store">

Retrieves metadata for a sequence store using its ID and returns it in JSON format.

```sql
SELECT
id,
name,
arn,
creation_time,
description,
e_tag_algorithm_family,
fallback_location,
propagated_set_level_tags,
s_3_access,
sse_config,
status,
status_message,
update_time
FROM aws.omics.sequence_stores
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_sequence_stores">

Retrieves a list of sequence stores and returns each sequence store's metadata. For more information, see Creating a HealthOmics sequence store in the Amazon Web Services HealthOmics User Guide.

```sql
SELECT
id,
name,
arn,
creation_time,
description,
e_tag_algorithm_family,
fallback_location,
sse_config,
status,
status_message,
update_time
FROM aws.omics.sequence_stores
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_sequence_store"
    values={[
        { label: 'create_sequence_store', value: 'create_sequence_store' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_sequence_store">

Creates a sequence store and returns its metadata. Sequence stores are used to store sequence data files called read sets that are saved in FASTQ, BAM, uBAM, or CRAM formats. For aligned formats (BAM and CRAM), a sequence store can only use one reference genome. For unaligned formats (FASTQ and uBAM), a reference genome is not required. You can create multiple sequence stores per region per account. The following are optional parameters you can specify for your sequence store: Use s3AccessConfig to configure your sequence store with S3 access logs (recommended). Use sseConfig to define your own KMS key for encryption. Use eTagAlgorithmFamily to define which algorithm to use for the HealthOmics eTag on objects. Use fallbackLocation to define a backup location for storing files that have failed a direct upload. Use propagatedSetLevelTags to configure tags that propagate to all objects in your store. For more information, see Creating a HealthOmics sequence store in the Amazon Web Services HealthOmics User Guide.

```sql
INSERT INTO aws.omics.sequence_stores (
name,
description,
sseConfig,
tags,
clientToken,
fallbackLocation,
eTagAlgorithmFamily,
propagatedSetLevelTags,
s3AccessConfig,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ sseConfig }}',
'{{ tags }}',
'{{ clientToken }}',
'{{ fallbackLocation }}',
'{{ eTagAlgorithmFamily }}',
'{{ propagatedSetLevelTags }}',
'{{ s3AccessConfig }}',
'{{ region }}'
RETURNING
id,
name,
arn,
creation_time,
description,
e_tag_algorithm_family,
fallback_location,
propagated_set_level_tags,
s_3_access,
sse_config,
status,
status_message
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: sequence_stores
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the sequence_stores resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: sseConfig
      description: |
        Server-side encryption (SSE) settings for a store.
      value:
        type_: "{{ type_ }}"
        keyArn: "{{ keyArn }}"
    - name: tags
      value: "{{ tags }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: fallbackLocation
      value: "{{ fallbackLocation }}"
    - name: eTagAlgorithmFamily
      value: "{{ eTagAlgorithmFamily }}"
      valid_values: ['MD5up', 'SHA256up', 'SHA512up']
    - name: propagatedSetLevelTags
      value:
        - "{{ propagatedSetLevelTags }}"
    - name: s3AccessConfig
      description: |
        S3 access configuration parameters.
      value:
        accessLogLocation: "{{ accessLogLocation }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_sequence_store"
    values={[
        { label: 'update_sequence_store', value: 'update_sequence_store' }
    ]}
>
<TabItem value="update_sequence_store">

Update one or more parameters for the sequence store.

```sql
UPDATE aws.omics.sequence_stores
SET 
name = '{{ name }}',
description = '{{ description }}',
clientToken = '{{ clientToken }}',
fallbackLocation = '{{ fallbackLocation }}',
propagatedSetLevelTags = '{{ propagatedSetLevelTags }}',
s3AccessConfig = '{{ s3AccessConfig }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
name,
arn,
creation_time,
description,
e_tag_algorithm_family,
fallback_location,
propagated_set_level_tags,
s_3_access,
sse_config,
status,
status_message,
update_time;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_sequence_store"
    values={[
        { label: 'delete_sequence_store', value: 'delete_sequence_store' }
    ]}
>
<TabItem value="delete_sequence_store">

Deletes a sequence store and returns a response with no body if the operation is successful. You can only delete a sequence store when it does not contain any read sets. Use the BatchDeleteReadSet API operation to ensure that all read sets in the sequence store are deleted. When a sequence store is deleted, all tags associated with the store are also deleted. For more information, see Deleting HealthOmics reference and sequence stores in the Amazon Web Services HealthOmics User Guide.

```sql
DELETE FROM aws.omics.sequence_stores
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="abort_multipart_read_set_upload"
    values={[
        { label: 'abort_multipart_read_set_upload', value: 'abort_multipart_read_set_upload' },
        { label: 'complete_multipart_read_set_upload', value: 'complete_multipart_read_set_upload' },
        { label: 'upload_read_set_part', value: 'upload_read_set_part' }
    ]}
>
<TabItem value="abort_multipart_read_set_upload">

Stops a multipart read set upload into a sequence store and returns a response with no body if the operation is successful. To confirm that a multipart read set upload has been stopped, use the ListMultipartReadSetUploads API operation to view all active multipart read set uploads.

```sql
EXEC aws.omics.sequence_stores.abort_multipart_read_set_upload 
@sequence_store_id='{{ sequence_store_id }}' --required, 
@upload_id='{{ upload_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="complete_multipart_read_set_upload">

Completes a multipart read set upload into a sequence store after you have initiated the upload process with CreateMultipartReadSetUpload and uploaded all read set parts using UploadReadSetPart. You must specify the parts you uploaded using the parts parameter. If the operation is successful, it returns the read set ID(s) of the uploaded read set(s). For more information, see Direct upload to a sequence store in the Amazon Web Services HealthOmics User Guide.

```sql
EXEC aws.omics.sequence_stores.complete_multipart_read_set_upload 
@sequence_store_id='{{ sequence_store_id }}' --required, 
@upload_id='{{ upload_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"parts": "{{ parts }}"
}'
;
```
</TabItem>
<TabItem value="upload_read_set_part">

Uploads a specific part of a read set into a sequence store. When you a upload a read set part with a part number that already exists, the new part replaces the existing one. This operation returns a JSON formatted response containing a string identifier that is used to confirm that parts are being added to the intended upload. For more information, see Direct upload to a sequence store in the Amazon Web Services HealthOmics User Guide.

```sql
EXEC aws.omics.sequence_stores.upload_read_set_part 
@sequence_store_id='{{ sequence_store_id }}' --required, 
@upload_id='{{ upload_id }}' --required, 
@partSource='{{ partSource }}' --required, 
@partNumber='{{ partNumber }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"payload": "{{ payload }}"
}'
;
```
</TabItem>
</Tabs>
