--- 
title: buckets
hide_title: false
hide_table_of_contents: false
keywords:
  - buckets
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

Creates, updates, deletes, gets or lists a <code>buckets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="buckets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.buckets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_buckets"
    values={[
        { label: 'get_buckets', value: 'get_buckets' }
    ]}
>
<TabItem value="get_buckets">

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
    <td><CopyableCode code="accountLevelBpaSync" /></td>
    <td><code>object</code></td>
    <td>An object that describes the synchronization status of the Amazon S3 account-level block public access feature for your Lightsail buckets. For more information about this feature and how it affects Lightsail buckets, see Block public access for buckets in Amazon Lightsail.</td>
</tr>
<tr>
    <td><CopyableCode code="buckets" /></td>
    <td><code>array</code></td>
    <td>An array of objects that describe buckets.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>The token to advance to the next page of results from your request. A next page token is not returned if there are no more results to display. To get the next page of results, perform another GetBuckets request and specify the next page token using the pageToken parameter.</td>
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
    <td><a href="#get_buckets"><CopyableCode code="get_buckets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about one or more Amazon Lightsail buckets. The information returned includes the synchronization status of the Amazon Simple Storage Service (Amazon S3) account-level block public access feature for your Lightsail buckets. For more information about buckets, see Buckets in Amazon Lightsail in the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#create_bucket"><CopyableCode code="create_bucket" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-bucketName"><code>bucketName</code></a>, <a href="#parameter-bundleId"><code>bundleId</code></a></td>
    <td></td>
    <td>Creates an Amazon Lightsail bucket. A bucket is a cloud storage resource available in the Lightsail object storage service. Use buckets to store objects such as data and its descriptive metadata. For more information about buckets, see Buckets in Amazon Lightsail in the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#set_resource_access_for_bucket"><CopyableCode code="set_resource_access_for_bucket" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resourceName"><code>resourceName</code></a>, <a href="#parameter-bucketName"><code>bucketName</code></a>, <a href="#parameter-access"><code>access</code></a></td>
    <td></td>
    <td>Sets the Amazon Lightsail resources that can access the specified Lightsail bucket. Lightsail buckets currently support setting access for Lightsail instances in the same Amazon Web Services Region.</td>
</tr>
<tr>
    <td><a href="#update_bucket"><CopyableCode code="update_bucket" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-bucketName"><code>bucketName</code></a></td>
    <td></td>
    <td>Updates an existing Amazon Lightsail bucket. Use this action to update the configuration of an existing bucket, such as versioning, public accessibility, and the Amazon Web Services accounts that can access the bucket.</td>
</tr>
<tr>
    <td><a href="#delete_bucket"><CopyableCode code="delete_bucket" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Amazon Lightsail bucket. When you delete your bucket, the bucket name is released and can be reused for a new bucket in your account or another Amazon Web Services account.</td>
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
    defaultValue="get_buckets"
    values={[
        { label: 'get_buckets', value: 'get_buckets' }
    ]}
>
<TabItem value="get_buckets">

Returns information about one or more Amazon Lightsail buckets. The information returned includes the synchronization status of the Amazon Simple Storage Service (Amazon S3) account-level block public access feature for your Lightsail buckets. For more information about buckets, see Buckets in Amazon Lightsail in the Amazon Lightsail Developer Guide.

```sql
SELECT
accountLevelBpaSync,
buckets,
nextPageToken
FROM aws.lightsail.buckets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_bucket"
    values={[
        { label: 'create_bucket', value: 'create_bucket' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_bucket">

Creates an Amazon Lightsail bucket. A bucket is a cloud storage resource available in the Lightsail object storage service. Use buckets to store objects such as data and its descriptive metadata. For more information about buckets, see Buckets in Amazon Lightsail in the Amazon Lightsail Developer Guide.

```sql
INSERT INTO aws.lightsail.buckets (
bucketName,
bundleId,
tags,
enableObjectVersioning,
region
)
SELECT 
'{{ bucketName }}' /* required */,
'{{ bundleId }}' /* required */,
'{{ tags }}',
{{ enableObjectVersioning }},
'{{ region }}'
RETURNING
bucket,
operations
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: buckets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the buckets resource.
    - name: bucketName
      value: "{{ bucketName }}"
      description: |
        The name for the bucket. For more information about bucket names, see Bucket naming rules in Amazon Lightsail in the Amazon Lightsail Developer Guide.
    - name: bundleId
      value: "{{ bundleId }}"
      description: |
        The ID of the bundle to use for the bucket. A bucket bundle specifies the monthly cost, storage space, and data transfer quota for a bucket. Use the GetBucketBundles action to get a list of bundle IDs that you can specify. Use the UpdateBucketBundle action to change the bundle after the bucket is created.
    - name: tags
      description: |
        The tag keys and optional values to add to the bucket during creation. Use the TagResource action to tag the bucket after it's created.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: enableObjectVersioning
      value: {{ enableObjectVersioning }}
      description: |
        A Boolean value that indicates whether to enable versioning of objects in the bucket. For more information about versioning, see Enabling and suspending object versioning in a bucket in Amazon Lightsail in the Amazon Lightsail Developer Guide.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_resource_access_for_bucket"
    values={[
        { label: 'set_resource_access_for_bucket', value: 'set_resource_access_for_bucket' },
        { label: 'update_bucket', value: 'update_bucket' }
    ]}
>
<TabItem value="set_resource_access_for_bucket">

Sets the Amazon Lightsail resources that can access the specified Lightsail bucket. Lightsail buckets currently support setting access for Lightsail instances in the same Amazon Web Services Region.

```sql
UPDATE aws.lightsail.buckets
SET 
resourceName = '{{ resourceName }}',
bucketName = '{{ bucketName }}',
access = '{{ access }}'
WHERE 
region = '{{ region }}' --required
AND resourceName = '{{ resourceName }}' --required
AND bucketName = '{{ bucketName }}' --required
AND access = '{{ access }}' --required
RETURNING
operations;
```
</TabItem>
<TabItem value="update_bucket">

Updates an existing Amazon Lightsail bucket. Use this action to update the configuration of an existing bucket, such as versioning, public accessibility, and the Amazon Web Services accounts that can access the bucket.

```sql
UPDATE aws.lightsail.buckets
SET 
bucketName = '{{ bucketName }}',
accessRules = '{{ accessRules }}',
versioning = '{{ versioning }}',
readonlyAccessAccounts = '{{ readonlyAccessAccounts }}',
accessLogConfig = '{{ accessLogConfig }}',
cors = '{{ cors }}'
WHERE 
region = '{{ region }}' --required
AND bucketName = '{{ bucketName }}' --required
RETURNING
bucket,
operations;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_bucket"
    values={[
        { label: 'delete_bucket', value: 'delete_bucket' }
    ]}
>
<TabItem value="delete_bucket">

Deletes a Amazon Lightsail bucket. When you delete your bucket, the bucket name is released and can be reused for a new bucket in your account or another Amazon Web Services account.

```sql
DELETE FROM aws.lightsail.buckets
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
