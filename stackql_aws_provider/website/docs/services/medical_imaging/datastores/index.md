--- 
title: datastores
hide_title: false
hide_table_of_contents: false
keywords:
  - datastores
  - medical_imaging
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

Creates, updates, deletes, gets or lists a <code>datastores</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="datastores" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.medical_imaging.datastores" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_datastore"
    values={[
        { label: 'get_datastore', value: 'get_datastore' },
        { label: 'list_datastores', value: 'list_datastores' }
    ]}
>
<TabItem value="get_datastore">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the data store was created.</td>
</tr>
<tr>
    <td><CopyableCode code="datastore_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the data store. (pattern: &lt;code&gt;arn:aws((-us-gov)|(-iso)|(-iso-b)|(-cn))?:medical-imaging:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:datastore/&#91;0-9a-z&#93;&#123;32&#125;(/imageset/&#91;0-9a-z&#93;&#123;32&#125;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="datastore_id" /></td>
    <td><code>string</code></td>
    <td>The data store identifier. (pattern: &lt;code&gt;&#91;0-9a-z&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="datastore_name" /></td>
    <td><code>string</code></td>
    <td>The data store name. (pattern: &lt;code&gt;&#91;A-Za-z0-9._/#-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="datastore_status" /></td>
    <td><code>string</code></td>
    <td>The data store status. (CREATING, CREATE_FAILED, ACTIVE, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_arn" /></td>
    <td><code>string</code></td>
    <td>ARN referencing a KMS key or KMS key alias. (pattern: &lt;code&gt;arn:aws&#91;a-zA-Z-&#93;&#123;0,16&#125;:kms:&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;&#123;1,16&#125;)&#123;1,3&#125;-\d&#123;1&#125;:\d&#123;12&#125;:((key/&#91;a-fA-F0-9&#93;&#123;8&#125;-&#91;a-fA-F0-9&#93;&#123;4&#125;-&#91;a-fA-F0-9&#93;&#123;4&#125;-&#91;a-fA-F0-9&#93;&#123;4&#125;-&#91;a-fA-F0-9&#93;&#123;12&#125;)|(alias/&#91;a-zA-Z0-9:/_-&#93;&#123;1,256&#125;))&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lambda_authorizer_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the authorizer's Lambda function. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:lambda:&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(b?)))?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:function:&#91;a-zA-Z0-9-_&#93;+(:(\$LATEST|&#91;a-zA-Z0-9-_&#93;+))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lossless_storage_format" /></td>
    <td><code>string</code></td>
    <td>The datastore's lossless storage format. (HTJ2K, JPEG_2000_LOSSLESS)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the data store was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_datastores">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the data store was created.</td>
</tr>
<tr>
    <td><CopyableCode code="datastore_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the data store. (pattern: &lt;code&gt;arn:aws((-us-gov)|(-iso)|(-iso-b)|(-cn))?:medical-imaging:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:datastore/&#91;0-9a-z&#93;&#123;32&#125;(/imageset/&#91;0-9a-z&#93;&#123;32&#125;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="datastore_id" /></td>
    <td><code>string</code></td>
    <td>The data store identifier. (pattern: &lt;code&gt;&#91;0-9a-z&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="datastore_name" /></td>
    <td><code>string</code></td>
    <td>The data store name. (pattern: &lt;code&gt;&#91;A-Za-z0-9._/#-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="datastore_status" /></td>
    <td><code>string</code></td>
    <td>The data store status. (CREATING, CREATE_FAILED, ACTIVE, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the data store was last updated.</td>
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
    <td><a href="#get_datastore"><CopyableCode code="get_datastore" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-datastore_id"><code>datastore_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get data store properties.</td>
</tr>
<tr>
    <td><a href="#list_datastores"><CopyableCode code="list_datastores" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-datastoreStatus"><code>datastoreStatus</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>List data stores.</td>
</tr>
<tr>
    <td><a href="#create_datastore"><CopyableCode code="create_datastore" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>Create a data store.</td>
</tr>
<tr>
    <td><a href="#delete_datastore"><CopyableCode code="delete_datastore" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-datastore_id"><code>datastore_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a data store. Before a data store can be deleted, you must first delete all image sets within it.</td>
</tr>
<tr>
    <td><a href="#copy_image_set"><CopyableCode code="copy_image_set" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-datastore_id"><code>datastore_id</code></a>, <a href="#parameter-source_image_set_id"><code>source_image_set_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-copyImageSetInformation"><code>copyImageSetInformation</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a>, <a href="#parameter-promoteToPrimary"><code>promoteToPrimary</code></a></td>
    <td>Copy an image set.</td>
</tr>
<tr>
    <td><a href="#start_dicom_import_job"><CopyableCode code="start_dicom_import_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-datastore_id"><code>datastore_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-dataAccessRoleArn"><code>dataAccessRoleArn</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a>, <a href="#parameter-inputS3Uri"><code>inputS3Uri</code></a>, <a href="#parameter-outputS3Uri"><code>outputS3Uri</code></a></td>
    <td></td>
    <td>Start importing bulk data into an ACTIVE data store. The import job imports DICOM P10 files or enhances existing DICOM files with JSON metadata. The importConfiguration parameter specifies the import type. The data is found in the S3 prefix specified by the inputS3Uri parameter. The import job stores processing results in the file specified by the outputS3Uri parameter.</td>
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
<tr id="parameter-datastore_id">
    <td><CopyableCode code="datastore_id" /></td>
    <td><code>string</code></td>
    <td>The data store identifier.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-source_image_set_id">
    <td><CopyableCode code="source_image_set_id" /></td>
    <td><code>string</code></td>
    <td>The source image set identifier.</td>
</tr>
<tr id="parameter-datastoreStatus">
    <td><CopyableCode code="datastoreStatus" /></td>
    <td><code>string</code></td>
    <td>The data store status.</td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
    <td>Providing this parameter will force completion of the CopyImageSet operation, even if there are inconsistent Patient, Study, and/or Series level metadata elements between the sourceImageSet and destinationImageSet.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Valid Range: Minimum value of 1. Maximum value of 50.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token used to request the list of data stores on the next page.</td>
</tr>
<tr id="parameter-promoteToPrimary">
    <td><CopyableCode code="promoteToPrimary" /></td>
    <td><code>boolean</code></td>
    <td>Providing this parameter will configure the CopyImageSet operation to promote the given image set to the primary DICOM hierarchy. If successful, a new primary image set ID will be returned as the destination image set.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_datastore"
    values={[
        { label: 'get_datastore', value: 'get_datastore' },
        { label: 'list_datastores', value: 'list_datastores' }
    ]}
>
<TabItem value="get_datastore">

Get data store properties.

```sql
SELECT
created_at,
datastore_arn,
datastore_id,
datastore_name,
datastore_status,
kms_key_arn,
lambda_authorizer_arn,
lossless_storage_format,
updated_at
FROM aws.medical_imaging.datastores
WHERE datastore_id = '{{ datastore_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_datastores">

List data stores.

```sql
SELECT
created_at,
datastore_arn,
datastore_id,
datastore_name,
datastore_status,
updated_at
FROM aws.medical_imaging.datastores
WHERE region = '{{ region }}' -- required
AND datastoreStatus = '{{ datastoreStatus }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_datastore"
    values={[
        { label: 'create_datastore', value: 'create_datastore' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_datastore">

Create a data store.

```sql
INSERT INTO aws.medical_imaging.datastores (
datastoreName,
clientToken,
tags,
kmsKeyArn,
lambdaAuthorizerArn,
losslessStorageFormat,
region
)
SELECT 
'{{ datastoreName }}',
'{{ clientToken }}' /* required */,
'{{ tags }}',
'{{ kmsKeyArn }}',
'{{ lambdaAuthorizerArn }}',
'{{ losslessStorageFormat }}',
'{{ region }}'
RETURNING
datastore_id,
datastore_status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: datastores
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the datastores resource.
    - name: datastoreName
      value: "{{ datastoreName }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value: "{{ tags }}"
    - name: kmsKeyArn
      value: "{{ kmsKeyArn }}"
      description: |
        ARN referencing a KMS key or KMS key alias.
    - name: lambdaAuthorizerArn
      value: "{{ lambdaAuthorizerArn }}"
    - name: losslessStorageFormat
      value: "{{ losslessStorageFormat }}"
      valid_values: ['HTJ2K', 'JPEG_2000_LOSSLESS']
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_datastore"
    values={[
        { label: 'delete_datastore', value: 'delete_datastore' }
    ]}
>
<TabItem value="delete_datastore">

Delete a data store. Before a data store can be deleted, you must first delete all image sets within it.

```sql
DELETE FROM aws.medical_imaging.datastores
WHERE datastore_id = '{{ datastore_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="copy_image_set"
    values={[
        { label: 'copy_image_set', value: 'copy_image_set' },
        { label: 'start_dicom_import_job', value: 'start_dicom_import_job' }
    ]}
>
<TabItem value="copy_image_set">

Copy an image set.

```sql
EXEC aws.medical_imaging.datastores.copy_image_set 
@datastore_id='{{ datastore_id }}' --required, 
@source_image_set_id='{{ source_image_set_id }}' --required, 
@region='{{ region }}' --required, 
@force={{ force }}, 
@promoteToPrimary={{ promoteToPrimary }} 
@@json=
'{
"copyImageSetInformation": "{{ copyImageSetInformation }}"
}'
;
```
</TabItem>
<TabItem value="start_dicom_import_job">

Start importing bulk data into an ACTIVE data store. The import job imports DICOM P10 files or enhances existing DICOM files with JSON metadata. The importConfiguration parameter specifies the import type. The data is found in the S3 prefix specified by the inputS3Uri parameter. The import job stores processing results in the file specified by the outputS3Uri parameter.

```sql
EXEC aws.medical_imaging.datastores.start_dicom_import_job 
@datastore_id='{{ datastore_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"jobName": "{{ jobName }}", 
"dataAccessRoleArn": "{{ dataAccessRoleArn }}", 
"clientToken": "{{ clientToken }}", 
"inputS3Uri": "{{ inputS3Uri }}", 
"outputS3Uri": "{{ outputS3Uri }}", 
"inputOwnerAccountId": "{{ inputOwnerAccountId }}", 
"importConfiguration": "{{ importConfiguration }}"
}'
;
```
</TabItem>
</Tabs>
