--- 
title: analyzed_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - analyzed_resources
  - accessanalyzer
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

Creates, updates, deletes, gets or lists an <code>analyzed_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="analyzed_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.accessanalyzer.analyzed_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_analyzed_resource"
    values={[
        { label: 'get_analyzed_resource', value: 'get_analyzed_resource' },
        { label: 'list_analyzed_resources', value: 'list_analyzed_resources' }
    ]}
>
<TabItem value="get_analyzed_resource">

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
    <td><CopyableCode code="actions" /></td>
    <td><code>array</code></td>
    <td>The actions that an external principal is granted permission to use by the policy that generated the finding.</td>
</tr>
<tr>
    <td><CopyableCode code="analyzed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the resource was analyzed.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the finding was created.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>string</code></td>
    <td>An error message.</td>
</tr>
<tr>
    <td><CopyableCode code="is_public" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the policy that generated the finding grants public access to the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the resource that was analyzed. (pattern: &lt;code&gt;arn:&#91;^:&#93;*:&#91;^:&#93;*:&#91;^:&#93;*:&#91;^:&#93;*:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_owner_account" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID that owns the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource that was analyzed. (AWS::S3::Bucket, AWS::IAM::Role, AWS::SQS::Queue, AWS::Lambda::Function, AWS::Lambda::LayerVersion, AWS::KMS::Key, AWS::SecretsManager::Secret, AWS::EFS::FileSystem, AWS::EC2::Snapshot, AWS::ECR::Repository, AWS::RDS::DBSnapshot, AWS::RDS::DBClusterSnapshot, AWS::SNS::Topic, AWS::S3Express::DirectoryBucket, AWS::DynamoDB::Table, AWS::DynamoDB::Stream, AWS::IAM::User)</td>
</tr>
<tr>
    <td><CopyableCode code="shared_via" /></td>
    <td><code>array</code></td>
    <td>Indicates how the access that generated the finding is granted. This is populated for Amazon S3 bucket findings.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the finding generated from the analyzed resource. (ACTIVE, ARCHIVED, RESOLVED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the finding was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_analyzed_resources">

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
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the analyzed resource. (pattern: &lt;code&gt;arn:&#91;^:&#93;*:&#91;^:&#93;*:&#91;^:&#93;*:&#91;^:&#93;*:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_owner_account" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID that owns the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of resource that was analyzed. (AWS::S3::Bucket, AWS::IAM::Role, AWS::SQS::Queue, AWS::Lambda::Function, AWS::Lambda::LayerVersion, AWS::KMS::Key, AWS::SecretsManager::Secret, AWS::EFS::FileSystem, AWS::EC2::Snapshot, AWS::ECR::Repository, AWS::RDS::DBSnapshot, AWS::RDS::DBClusterSnapshot, AWS::SNS::Topic, AWS::S3Express::DirectoryBucket, AWS::DynamoDB::Table, AWS::DynamoDB::Stream, AWS::IAM::User)</td>
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
    <td><a href="#get_analyzed_resource"><CopyableCode code="get_analyzed_resource" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-analyzerArn"><code>analyzerArn</code></a>, <a href="#parameter-resourceArn"><code>resourceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a resource that was analyzed. This action is supported only for external access analyzers.</td>
</tr>
<tr>
    <td><a href="#list_analyzed_resources"><CopyableCode code="list_analyzed_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of resources of the specified type that have been analyzed by the specified analyzer.</td>
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
<tr id="parameter-analyzerArn">
    <td><CopyableCode code="analyzerArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the analyzer to retrieve information from.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-resourceArn">
    <td><CopyableCode code="resourceArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the resource to retrieve information about.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_analyzed_resource"
    values={[
        { label: 'get_analyzed_resource', value: 'get_analyzed_resource' },
        { label: 'list_analyzed_resources', value: 'list_analyzed_resources' }
    ]}
>
<TabItem value="get_analyzed_resource">

Retrieves information about a resource that was analyzed. This action is supported only for external access analyzers.

```sql
SELECT
actions,
analyzed_at,
created_at,
error,
is_public,
resource_arn,
resource_owner_account,
resource_type,
shared_via,
status,
updated_at
FROM aws.accessanalyzer.analyzed_resources
WHERE analyzerArn = '{{ analyzerArn }}' -- required
AND resourceArn = '{{ resourceArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_analyzed_resources">

Retrieves a list of resources of the specified type that have been analyzed by the specified analyzer.

```sql
SELECT
resource_arn,
resource_owner_account,
resource_type
FROM aws.accessanalyzer.analyzed_resources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
