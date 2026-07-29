--- 
title: location_s3s
hide_title: false
hide_table_of_contents: false
keywords:
  - location_s3s
  - datasync
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

Creates, updates, deletes, gets or lists a <code>location_s3s</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="location_s3s" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datasync.location_s3s" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_location_s3"
    values={[
        { label: 'describe_location_s3', value: 'describe_location_s3' }
    ]}
>
<TabItem value="describe_location_s3">

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
    <td><CopyableCode code="agent_arns" /></td>
    <td><code>array</code></td>
    <td>The ARNs of the DataSync agents deployed on your Outpost when using working with Amazon S3 on Outposts. For more information, see Deploy your DataSync agent on Outposts.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the Amazon S3 location was created.</td>
</tr>
<tr>
    <td><CopyableCode code="location_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Amazon S3 location. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov|aws-eusc|aws-iso|aws-iso-b):datasync:&#91;a-z\-0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:location/loc-&#91;0-9a-z&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="location_uri" /></td>
    <td><code>string</code></td>
    <td>The URL of the Amazon S3 location that was described. (pattern: &lt;code&gt;^(efs|nfs|s3|smb|hdfs|fsx&#91;a-z0-9-&#93;+):​//&#91;a-zA-Z0-9.:/\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="s3_config" /></td>
    <td><code>object</code></td>
    <td>Specifies the Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that DataSync uses to access your S3 bucket. For more information, see Providing DataSync access to S3 buckets.</td>
</tr>
<tr>
    <td><CopyableCode code="s3_storage_class" /></td>
    <td><code>string</code></td>
    <td>When Amazon S3 is a destination location, this is the storage class that you chose for your objects. Some storage classes have behaviors that can affect your Amazon S3 storage costs. For more information, see Storage class considerations with Amazon S3 transfers. (STANDARD, STANDARD_IA, ONEZONE_IA, INTELLIGENT_TIERING, GLACIER, DEEP_ARCHIVE, OUTPOSTS, GLACIER_INSTANT_RETRIEVAL)</td>
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
    <td><a href="#describe_location_s3"><CopyableCode code="describe_location_s3" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides details about how an DataSync transfer location for an S3 bucket is configured.</td>
</tr>
<tr>
    <td><a href="#create_location_s3"><CopyableCode code="create_location_s3" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-S3BucketArn"><code>S3BucketArn</code></a>, <a href="#parameter-S3Config"><code>S3Config</code></a></td>
    <td></td>
    <td>Creates a transfer location for an Amazon S3 bucket. DataSync can use this location as a source or destination for transferring data. Before you begin, make sure that you read the following topics: Storage class considerations with Amazon S3 locations Evaluating S3 request costs when using DataSync For more information, see Configuring transfers with Amazon S3.</td>
</tr>
<tr>
    <td><a href="#update_location_s3"><CopyableCode code="update_location_s3" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LocationArn"><code>LocationArn</code></a></td>
    <td></td>
    <td>Modifies the following configuration parameters of the Amazon S3 transfer location that you're using with DataSync. Before you begin, make sure that you read the following topics: Storage class considerations with Amazon S3 locations Evaluating S3 request costs when using DataSync</td>
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
    defaultValue="describe_location_s3"
    values={[
        { label: 'describe_location_s3', value: 'describe_location_s3' }
    ]}
>
<TabItem value="describe_location_s3">

Provides details about how an DataSync transfer location for an S3 bucket is configured.

```sql
SELECT
agent_arns,
creation_time,
location_arn,
location_uri,
s3_config,
s3_storage_class
FROM aws.datasync.location_s3s
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_location_s3"
    values={[
        { label: 'create_location_s3', value: 'create_location_s3' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_location_s3">

Creates a transfer location for an Amazon S3 bucket. DataSync can use this location as a source or destination for transferring data. Before you begin, make sure that you read the following topics: Storage class considerations with Amazon S3 locations Evaluating S3 request costs when using DataSync For more information, see Configuring transfers with Amazon S3.

```sql
INSERT INTO aws.datasync.location_s3s (
Subdirectory,
S3BucketArn,
S3StorageClass,
S3Config,
AgentArns,
Tags,
region
)
SELECT 
'{{ Subdirectory }}',
'{{ S3BucketArn }}' /* required */,
'{{ S3StorageClass }}',
'{{ S3Config }}' /* required */,
'{{ AgentArns }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
location_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: location_s3s
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the location_s3s resource.
    - name: Subdirectory
      value: "{{ Subdirectory }}"
      description: |
        Specifies a prefix in the S3 bucket that DataSync reads from or writes to (depending on whether the bucket is a source or destination location). DataSync can't transfer objects with a prefix that begins with a slash (/) or includes //, /./, or /../ patterns. For example: /photos photos//2006/January photos/./2006/February photos/../2006/March
    - name: S3BucketArn
      value: "{{ S3BucketArn }}"
      description: |
        Specifies the ARN of the S3 bucket that you want to use as a location. (When creating your DataSync task later, you specify whether this location is a transfer source or destination.) If your S3 bucket is located on an Outposts resource, you must specify an Amazon S3 access point. For more information, see Managing data access with Amazon S3 access points in the Amazon S3 User Guide.
    - name: S3StorageClass
      value: "{{ S3StorageClass }}"
      description: |
        Specifies the storage class that you want your objects to use when Amazon S3 is a transfer destination. For buckets in Amazon Web Services Regions, the storage class defaults to STANDARD. For buckets on Outposts, the storage class defaults to OUTPOSTS. For more information, see Storage class considerations with Amazon S3 transfers.
      valid_values: ['STANDARD', 'STANDARD_IA', 'ONEZONE_IA', 'INTELLIGENT_TIERING', 'GLACIER', 'DEEP_ARCHIVE', 'OUTPOSTS', 'GLACIER_INSTANT_RETRIEVAL']
    - name: S3Config
      description: |
        Specifies the Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that DataSync uses to access your S3 bucket. For more information, see Providing DataSync access to S3 buckets.
      value:
        BucketAccessRoleArn: "{{ BucketAccessRoleArn }}"
    - name: AgentArns
      value:
        - "{{ AgentArns }}"
      description: |
        (Amazon S3 on Outposts only) Specifies the Amazon Resource Name (ARN) of the DataSync agent on your Outpost. For more information, see Deploy your DataSync agent on Outposts.
    - name: Tags
      description: |
        Specifies labels that help you categorize, filter, and search for your Amazon Web Services resources. We recommend creating at least a name tag for your transfer location.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_location_s3"
    values={[
        { label: 'update_location_s3', value: 'update_location_s3' }
    ]}
>
<TabItem value="update_location_s3">

Modifies the following configuration parameters of the Amazon S3 transfer location that you're using with DataSync. Before you begin, make sure that you read the following topics: Storage class considerations with Amazon S3 locations Evaluating S3 request costs when using DataSync

```sql
UPDATE aws.datasync.location_s3s
SET 
LocationArn = '{{ LocationArn }}',
Subdirectory = '{{ Subdirectory }}',
S3StorageClass = '{{ S3StorageClass }}',
S3Config = '{{ S3Config }}'
WHERE 
region = '{{ region }}' --required
AND LocationArn = '{{ LocationArn }}' --required;
```
</TabItem>
</Tabs>
