--- 
title: bucket_access_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - bucket_access_keys
  - lightsail
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

Creates, updates, deletes, gets or lists a <code>bucket_access_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bucket_access_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.bucket_access_keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_bucket_access_keys"
    values={[
        { label: 'get_bucket_access_keys', value: 'get_bucket_access_keys' }
    ]}
>
<TabItem value="get_bucket_access_keys">

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
    <td><CopyableCode code="access_keys" /></td>
    <td><code>array</code></td>
    <td>An object that describes the access keys for the specified bucket.</td>
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
    <td><a href="#get_bucket_access_keys"><CopyableCode code="get_bucket_access_keys" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the existing access key IDs for the specified Amazon Lightsail bucket. This action does not return the secret access key value of an access key. You can get a secret access key only when you create it from the response of the CreateBucketAccessKey action. If you lose the secret access key, you must create a new access key.</td>
</tr>
<tr>
    <td><a href="#create_bucket_access_key"><CopyableCode code="create_bucket_access_key" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-bucketName"><code>bucketName</code></a></td>
    <td></td>
    <td>Creates a new access key for the specified Amazon Lightsail bucket. Access keys consist of an access key ID and corresponding secret access key. Access keys grant full programmatic access to the specified bucket and its objects. You can have a maximum of two access keys per bucket. Use the GetBucketAccessKeys action to get a list of current access keys for a specific bucket. For more information about access keys, see Creating access keys for a bucket in Amazon Lightsail in the Amazon Lightsail Developer Guide. The secretAccessKey value is returned only in response to the CreateBucketAccessKey action. You can get a secret access key only when you first create an access key; you cannot get the secret access key later. If you lose the secret access key, you must create a new access key.</td>
</tr>
<tr>
    <td><a href="#delete_bucket_access_key"><CopyableCode code="delete_bucket_access_key" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an access key for the specified Amazon Lightsail bucket. We recommend that you delete an access key if the secret access key is compromised. For more information about access keys, see Creating access keys for a bucket in Amazon Lightsail in the Amazon Lightsail Developer Guide.</td>
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
    defaultValue="get_bucket_access_keys"
    values={[
        { label: 'get_bucket_access_keys', value: 'get_bucket_access_keys' }
    ]}
>
<TabItem value="get_bucket_access_keys">

Returns the existing access key IDs for the specified Amazon Lightsail bucket. This action does not return the secret access key value of an access key. You can get a secret access key only when you create it from the response of the CreateBucketAccessKey action. If you lose the secret access key, you must create a new access key.

```sql
SELECT
access_keys
FROM aws.lightsail.bucket_access_keys
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_bucket_access_key"
    values={[
        { label: 'create_bucket_access_key', value: 'create_bucket_access_key' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_bucket_access_key">

Creates a new access key for the specified Amazon Lightsail bucket. Access keys consist of an access key ID and corresponding secret access key. Access keys grant full programmatic access to the specified bucket and its objects. You can have a maximum of two access keys per bucket. Use the GetBucketAccessKeys action to get a list of current access keys for a specific bucket. For more information about access keys, see Creating access keys for a bucket in Amazon Lightsail in the Amazon Lightsail Developer Guide. The secretAccessKey value is returned only in response to the CreateBucketAccessKey action. You can get a secret access key only when you first create an access key; you cannot get the secret access key later. If you lose the secret access key, you must create a new access key.

```sql
INSERT INTO aws.lightsail.bucket_access_keys (
bucketName,
region
)
SELECT 
'{{ bucketName }}' /* required */,
'{{ region }}'
RETURNING
access_key,
operations
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: bucket_access_keys
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the bucket_access_keys resource.
    - name: bucketName
      value: "{{ bucketName }}"
      description: |
        The name of the bucket that the new access key will belong to, and grant access to.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_bucket_access_key"
    values={[
        { label: 'delete_bucket_access_key', value: 'delete_bucket_access_key' }
    ]}
>
<TabItem value="delete_bucket_access_key">

Deletes an access key for the specified Amazon Lightsail bucket. We recommend that you delete an access key if the secret access key is compromised. For more information about access keys, see Creating access keys for a bucket in Amazon Lightsail in the Amazon Lightsail Developer Guide.

```sql
DELETE FROM aws.lightsail.bucket_access_keys
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
