--- 
title: findings_v2
hide_title: false
hide_table_of_contents: false
keywords:
  - findings_v2
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

Creates, updates, deletes, gets or lists a <code>findings_v2</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="findings_v2" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.accessanalyzer.findings_v2" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_finding_v2"
    values={[
        { label: 'get_finding_v2', value: 'get_finding_v2' },
        { label: 'list_findings_v2', value: 'list_findings_v2' }
    ]}
>
<TabItem value="get_finding_v2">

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
    <td><CopyableCode code="external_access_details" /></td>
    <td><code>object</code></td>
    <td>The details for an external access analyzer finding.</td>
</tr>
<tr>
    <td><CopyableCode code="internal_access_details" /></td>
    <td><code>object</code></td>
    <td>The details for an internal access analyzer finding. This contains information about access patterns identified within your Amazon Web Services organization or account.</td>
</tr>
<tr>
    <td><CopyableCode code="unused_iam_role_details" /></td>
    <td><code>object</code></td>
    <td>The details for an unused access analyzer finding with an unused IAM role finding type.</td>
</tr>
<tr>
    <td><CopyableCode code="unused_iam_user_access_key_details" /></td>
    <td><code>object</code></td>
    <td>The details for an unused access analyzer finding with an unused IAM user access key finding type.</td>
</tr>
<tr>
    <td><CopyableCode code="unused_iam_user_password_details" /></td>
    <td><code>object</code></td>
    <td>The details for an unused access analyzer finding with an unused IAM user password finding type.</td>
</tr>
<tr>
    <td><CopyableCode code="unused_permission_details" /></td>
    <td><code>object</code></td>
    <td>The details for an unused access analyzer finding with an unused permission finding type.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_findings_v2">

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
    <td>The ID of the finding.</td>
</tr>
<tr>
    <td><CopyableCode code="analyzed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the resource-based policy or IAM entity that generated the finding was analyzed.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the finding was created.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>string</code></td>
    <td>The error that resulted in an Error finding.</td>
</tr>
<tr>
    <td><CopyableCode code="finding_type" /></td>
    <td><code>string</code></td>
    <td>The type of the access finding. For external access analyzers, the type is ExternalAccess. For unused access analyzers, the type can be UnusedIAMRole, UnusedIAMUserAccessKey, UnusedIAMUserPassword, or UnusedPermission. For internal access analyzers, the type is InternalAccess. (ExternalAccess, UnusedIAMRole, UnusedIAMUserAccessKey, UnusedIAMUserPassword, UnusedPermission, InternalAccess)</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>string</code></td>
    <td>The resource that the external principal has access to.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_owner_account" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID that owns the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource that the external principal has access to. (AWS::S3::Bucket, AWS::IAM::Role, AWS::SQS::Queue, AWS::Lambda::Function, AWS::Lambda::LayerVersion, AWS::KMS::Key, AWS::SecretsManager::Secret, AWS::EFS::FileSystem, AWS::EC2::Snapshot, AWS::ECR::Repository, AWS::RDS::DBSnapshot, AWS::RDS::DBClusterSnapshot, AWS::SNS::Topic, AWS::S3Express::DirectoryBucket, AWS::DynamoDB::Table, AWS::DynamoDB::Stream, AWS::IAM::User)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the finding. (ACTIVE, ARCHIVED, RESOLVED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the finding was most recently updated.</td>
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
    <td><a href="#get_finding_v2"><CopyableCode code="get_finding_v2" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-analyzerArn"><code>analyzerArn</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves information about the specified finding. GetFinding and GetFindingV2 both use access-analyzer:GetFinding in the Action element of an IAM policy statement. You must have permission to perform the access-analyzer:GetFinding action.</td>
</tr>
<tr>
    <td><a href="#list_findings_v2"><CopyableCode code="list_findings_v2" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of findings generated by the specified analyzer. ListFindings and ListFindingsV2 both use access-analyzer:ListFindings in the Action element of an IAM policy statement. You must have permission to perform the access-analyzer:ListFindings action. To learn about filter keys that you can use to retrieve a list of findings, see IAM Access Analyzer filter keys in the IAM User Guide.</td>
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
    <td>The ARN of the analyzer that generated the finding.</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the finding to retrieve.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token used for pagination of results returned.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_finding_v2"
    values={[
        { label: 'get_finding_v2', value: 'get_finding_v2' },
        { label: 'list_findings_v2', value: 'list_findings_v2' }
    ]}
>
<TabItem value="get_finding_v2">

Retrieves information about the specified finding. GetFinding and GetFindingV2 both use access-analyzer:GetFinding in the Action element of an IAM policy statement. You must have permission to perform the access-analyzer:GetFinding action.

```sql
SELECT
external_access_details,
internal_access_details,
unused_iam_role_details,
unused_iam_user_access_key_details,
unused_iam_user_password_details,
unused_permission_details
FROM aws.accessanalyzer.findings_v2
WHERE analyzerArn = '{{ analyzerArn }}' -- required
AND id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
<TabItem value="list_findings_v2">

Retrieves a list of findings generated by the specified analyzer. ListFindings and ListFindingsV2 both use access-analyzer:ListFindings in the Action element of an IAM policy statement. You must have permission to perform the access-analyzer:ListFindings action. To learn about filter keys that you can use to retrieve a list of findings, see IAM Access Analyzer filter keys in the IAM User Guide.

```sql
SELECT
id,
analyzed_at,
created_at,
error,
finding_type,
resource,
resource_owner_account,
resource_type,
status,
updated_at
FROM aws.accessanalyzer.findings_v2
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
