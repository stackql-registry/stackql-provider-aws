--- 
title: file_systems
hide_title: false
hide_table_of_contents: false
keywords:
  - file_systems
  - s3files
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

Creates, updates, deletes, gets or lists a <code>file_systems</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="file_systems" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3files.file_systems" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_file_system"
    values={[
        { label: 'get_file_system', value: 'get_file_system' },
        { label: 'list_file_systems', value: 'list_file_systems' }
    ]}
>
<TabItem value="get_file_system">

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
    <td>The name of the file system. (pattern: &lt;code&gt;(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-@&#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="bucket" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the S3 bucket. (pattern: &lt;code&gt;(arn:aws&#91;a-zA-Z0-9-&#93;*:s3:::.+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="client_token" /></td>
    <td><code>string</code></td>
    <td>The client token used for idempotency when the file system was created. (pattern: &lt;code&gt;(.+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the file system was created.</td>
</tr>
<tr>
    <td><CopyableCode code="file_system_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the file system. (pattern: &lt;code&gt;(arn:aws&#91;-a-z&#93;*:s3files:&#91;0-9a-z-:&#93;+:file-system/fs-&#91;0-9a-f&#93;&#123;17,40&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="file_system_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the file system. (pattern: &lt;code&gt;(arn:aws&#91;-a-z&#93;*:s3files:&#91;0-9a-z-:&#93;+:file-system/fs-&#91;0-9a-f&#93;&#123;17,40&#125;|fs-&#91;0-9a-f&#93;&#123;17,40&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Amazon Web Services KMS key used for encryption. (pattern: &lt;code&gt;(&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;|mrk-&#91;0-9a-f&#93;&#123;32&#125;|alias/&#91;a-zA-Z0-9/_-&#93;+|(arn:aws&#91;-a-z&#93;*:kms:&#91;a-z0-9-&#93;+:\d&#123;12&#125;:((key/&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;)|(key/mrk-&#91;0-9a-f&#93;&#123;32&#125;)|(alias/&#91;a-zA-Z0-9/_-&#93;+))))&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the file system owner. (pattern: &lt;code&gt;(\d&#123;12&#125;)|(\d&#123;4&#125;-&#123;4&#125;-\d&#123;4&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="prefix" /></td>
    <td><code>string</code></td>
    <td>The prefix in the S3 bucket that the file system provides access to.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role used for S3 access. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the file system. (available, creating, deleting, deleted, error, updating)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>Additional information about the file system status.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The tags associated with the file system.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_file_systems">

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
    <td>The name of the file system. (pattern: &lt;code&gt;(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-@&#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="bucket" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the S3 bucket. (pattern: &lt;code&gt;(arn:aws&#91;a-zA-Z0-9-&#93;*:s3:::.+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the file system was created.</td>
</tr>
<tr>
    <td><CopyableCode code="file_system_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the file system. (pattern: &lt;code&gt;(arn:aws&#91;-a-z&#93;*:s3files:&#91;0-9a-z-:&#93;+:file-system/fs-&#91;0-9a-f&#93;&#123;17,40&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="file_system_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the file system. (pattern: &lt;code&gt;(arn:aws&#91;-a-z&#93;*:s3files:&#91;0-9a-z-:&#93;+:file-system/fs-&#91;0-9a-f&#93;&#123;17,40&#125;|fs-&#91;0-9a-f&#93;&#123;17,40&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the file system owner. (pattern: &lt;code&gt;(\d&#123;12&#125;)|(\d&#123;4&#125;-&#123;4&#125;-\d&#123;4&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role used for S3 access. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the file system. (available, creating, deleting, deleted, error, updating)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>Additional information about the file system status.</td>
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
    <td><a href="#get_file_system"><CopyableCode code="get_file_system" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-file_system_id"><code>file_system_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns resource information for the specified S3 File System including status, configuration, and metadata.</td>
</tr>
<tr>
    <td><a href="#list_file_systems"><CopyableCode code="list_file_systems" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of all S3 File Systems owned by the account with optional filtering by bucket.</td>
</tr>
<tr>
    <td><a href="#create_file_system"><CopyableCode code="create_file_system" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a></td>
    <td></td>
    <td>Creates an S3 File System resource scoped to a bucket or prefix within a bucket, enabling file system access to S3 data. To create a file system, you need an S3 bucket and an IAM role that grants the service permission to access the bucket.</td>
</tr>
<tr>
    <td><a href="#delete_file_system"><CopyableCode code="delete_file_system" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-file_system_id"><code>file_system_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-forceDelete"><code>forceDelete</code></a></td>
    <td>Deletes an S3 File System. You can optionally force deletion of a file system that has pending export data.</td>
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
<tr id="parameter-file_system_id">
    <td><CopyableCode code="file_system_id" /></td>
    <td><code>string</code></td>
    <td>The ID or Amazon Resource Name (ARN) of the S3 File System to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-bucket">
    <td><CopyableCode code="bucket" /></td>
    <td><code>string</code></td>
    <td>Optional filter to list only file systems associated with the specified S3 bucket Amazon Resource Name (ARN). If provided, only file systems that provide access to this bucket will be returned in the response.</td>
</tr>
<tr id="parameter-forceDelete">
    <td><CopyableCode code="forceDelete" /></td>
    <td><code>boolean</code></td>
    <td>If true, allows deletion of a file system that contains data pending export to S3. If false (the default), the deletion will fail if there is data that has not yet been exported to the S3 bucket. Use this parameter with caution as it may result in data loss.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of file systems to return in a single response. If not specified, up to 100 file systems are returned.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token returned from a previous call to continue listing file systems.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_file_system"
    values={[
        { label: 'get_file_system', value: 'get_file_system' },
        { label: 'list_file_systems', value: 'list_file_systems' }
    ]}
>
<TabItem value="get_file_system">

Returns resource information for the specified S3 File System including status, configuration, and metadata.

```sql
SELECT
name,
bucket,
client_token,
creation_time,
file_system_arn,
file_system_id,
kms_key_id,
owner_id,
prefix,
role_arn,
status,
status_message,
tags
FROM aws.s3files.file_systems
WHERE file_system_id = '{{ file_system_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_file_systems">

Returns a list of all S3 File Systems owned by the account with optional filtering by bucket.

```sql
SELECT
name,
bucket,
creation_time,
file_system_arn,
file_system_id,
owner_id,
role_arn,
status,
status_message
FROM aws.s3files.file_systems
WHERE region = '{{ region }}' -- required
AND bucket = '{{ bucket }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_file_system"
    values={[
        { label: 'create_file_system', value: 'create_file_system' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_file_system">

Creates an S3 File System resource scoped to a bucket or prefix within a bucket, enabling file system access to S3 data. To create a file system, you need an S3 bucket and an IAM role that grants the service permission to access the bucket.

```sql
INSERT INTO aws.s3files.file_systems (
bucket,
prefix,
clientToken,
kmsKeyId,
roleArn,
tags,
acceptBucketWarning,
region
)
SELECT 
'{{ bucket }}' /* required */,
'{{ prefix }}',
'{{ clientToken }}',
'{{ kmsKeyId }}',
'{{ roleArn }}' /* required */,
'{{ tags }}',
{{ acceptBucketWarning }},
'{{ region }}'
RETURNING
name,
bucket,
client_token,
creation_time,
file_system_arn,
file_system_id,
kms_key_id,
owner_id,
prefix,
role_arn,
status,
status_message,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: file_systems
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the file_systems resource.
    - name: bucket
      value: "{{ bucket }}"
    - name: prefix
      value: "{{ prefix }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: kmsKeyId
      value: "{{ kmsKeyId }}"
    - name: roleArn
      value: "{{ roleArn }}"
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: acceptBucketWarning
      value: {{ acceptBucketWarning }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_file_system"
    values={[
        { label: 'delete_file_system', value: 'delete_file_system' }
    ]}
>
<TabItem value="delete_file_system">

Deletes an S3 File System. You can optionally force deletion of a file system that has pending export data.

```sql
DELETE FROM aws.s3files.file_systems
WHERE file_system_id = '{{ file_system_id }}' --required
AND region = '{{ region }}' --required
AND forceDelete = '{{ forceDelete }}'
;
```
</TabItem>
</Tabs>
