--- 
title: access_preview_findings
hide_title: false
hide_table_of_contents: false
keywords:
  - access_preview_findings
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

Creates, updates, deletes, gets or lists an <code>access_preview_findings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="access_preview_findings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.accessanalyzer.access_preview_findings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_access_preview_findings"
    values={[
        { label: 'list_access_preview_findings', value: 'list_access_preview_findings' }
    ]}
>
<TabItem value="list_access_preview_findings">

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
    <td>The ID of the access preview finding. This ID uniquely identifies the element in the list of access preview findings and is not related to the finding ID in Access Analyzer.</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>array</code></td>
    <td>The action in the analyzed policy statement that an external principal has permission to perform.</td>
</tr>
<tr>
    <td><CopyableCode code="change_type" /></td>
    <td><code>string</code></td>
    <td>Provides context on how the access preview finding compares to existing access identified in IAM Access Analyzer. New - The finding is for newly-introduced access. Unchanged - The preview finding is an existing finding that would remain unchanged. Changed - The preview finding is an existing finding with a change in status. For example, a Changed finding with preview status Resolved and existing status Active indicates the existing Active finding would become Resolved as a result of the proposed permissions change. (CHANGED, NEW, UNCHANGED)</td>
</tr>
<tr>
    <td><CopyableCode code="condition" /></td>
    <td><code>object</code></td>
    <td>The condition in the analyzed policy statement that resulted in a finding.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the access preview finding was created.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>string</code></td>
    <td>An error.</td>
</tr>
<tr>
    <td><CopyableCode code="existing_finding_id" /></td>
    <td><code>string</code></td>
    <td>The existing ID of the finding in IAM Access Analyzer, provided only for existing findings.</td>
</tr>
<tr>
    <td><CopyableCode code="existing_finding_status" /></td>
    <td><code>string</code></td>
    <td>The existing status of the finding, provided only for existing findings. (ACTIVE, ARCHIVED, RESOLVED)</td>
</tr>
<tr>
    <td><CopyableCode code="is_public" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the policy that generated the finding allows public access to the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="principal" /></td>
    <td><code>object</code></td>
    <td>The external principal that has access to a resource within the zone of trust.</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>string</code></td>
    <td>The resource that an external principal has access to. This is the resource associated with the access preview.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_control_policy_restriction" /></td>
    <td><code>string</code></td>
    <td>The type of restriction applied to the finding by the resource owner with an Organizations resource control policy (RCP). (APPLICABLE, FAILED_TO_EVALUATE_RCP, NOT_APPLICABLE, APPLIED)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_owner_account" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID that owns the resource. For most Amazon Web Services resources, the owning account is the account in which the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource that can be accessed in the finding. (AWS::S3::Bucket, AWS::IAM::Role, AWS::SQS::Queue, AWS::Lambda::Function, AWS::Lambda::LayerVersion, AWS::KMS::Key, AWS::SecretsManager::Secret, AWS::EFS::FileSystem, AWS::EC2::Snapshot, AWS::ECR::Repository, AWS::RDS::DBSnapshot, AWS::RDS::DBClusterSnapshot, AWS::SNS::Topic, AWS::S3Express::DirectoryBucket, AWS::DynamoDB::Table, AWS::DynamoDB::Stream, AWS::IAM::User)</td>
</tr>
<tr>
    <td><CopyableCode code="sources" /></td>
    <td><code>array</code></td>
    <td>The sources of the finding. This indicates how the access that generated the finding is granted. It is populated for Amazon S3 bucket findings.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The preview status of the finding. This is what the status of the finding would be after permissions deployment. For example, a Changed finding with preview status Resolved and existing status Active indicates the existing Active finding would become Resolved as a result of the proposed permissions change. (ACTIVE, ARCHIVED, RESOLVED)</td>
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
    <td><a href="#list_access_preview_findings"><CopyableCode code="list_access_preview_findings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-access_preview_id"><code>access_preview_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of access preview findings generated by the specified access preview.</td>
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
<tr id="parameter-access_preview_id">
    <td><CopyableCode code="access_preview_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID for the access preview.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_access_preview_findings"
    values={[
        { label: 'list_access_preview_findings', value: 'list_access_preview_findings' }
    ]}
>
<TabItem value="list_access_preview_findings">

Retrieves a list of access preview findings generated by the specified access preview.

```sql
SELECT
id,
action,
change_type,
condition,
created_at,
error,
existing_finding_id,
existing_finding_status,
is_public,
principal,
resource,
resource_control_policy_restriction,
resource_owner_account,
resource_type,
sources,
status
FROM aws.accessanalyzer.access_preview_findings
WHERE access_preview_id = '{{ access_preview_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
