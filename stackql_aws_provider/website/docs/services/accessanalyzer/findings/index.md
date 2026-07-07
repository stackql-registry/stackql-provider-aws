--- 
title: findings
hide_title: false
hide_table_of_contents: false
keywords:
  - findings
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

Creates, updates, deletes, gets or lists a <code>findings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="findings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.accessanalyzer.findings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_finding"
    values={[
        { label: 'get_finding', value: 'get_finding' },
        { label: 'list_findings', value: 'list_findings' }
    ]}
>
<TabItem value="get_finding">

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
    <td><CopyableCode code="action" /></td>
    <td><code>array</code></td>
    <td>The action in the analyzed policy statement that an external principal has permission to use.</td>
</tr>
<tr>
    <td><CopyableCode code="analyzedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the resource was analyzed.</td>
</tr>
<tr>
    <td><CopyableCode code="condition" /></td>
    <td><code>object</code></td>
    <td>The condition in the analyzed policy statement that resulted in a finding.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the finding was generated.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>string</code></td>
    <td>An error.</td>
</tr>
<tr>
    <td><CopyableCode code="isPublic" /></td>
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
    <td>The resource that an external principal has access to.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceControlPolicyRestriction" /></td>
    <td><code>string</code></td>
    <td>The type of restriction applied to the finding by the resource owner with an Organizations resource control policy (RCP). (APPLICABLE, FAILED_TO_EVALUATE_RCP, NOT_APPLICABLE, APPLIED)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceOwnerAccount" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID that owns the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>The type of the resource identified in the finding. (AWS::S3::Bucket, AWS::IAM::Role, AWS::SQS::Queue, AWS::Lambda::Function, AWS::Lambda::LayerVersion, AWS::KMS::Key, AWS::SecretsManager::Secret, AWS::EFS::FileSystem, AWS::EC2::Snapshot, AWS::ECR::Repository, AWS::RDS::DBSnapshot, AWS::RDS::DBClusterSnapshot, AWS::SNS::Topic, AWS::S3Express::DirectoryBucket, AWS::DynamoDB::Table, AWS::DynamoDB::Stream, AWS::IAM::User)</td>
</tr>
<tr>
    <td><CopyableCode code="sources" /></td>
    <td><code>array</code></td>
    <td>The sources of the finding. This indicates how the access that generated the finding is granted. It is populated for Amazon S3 bucket findings.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the finding. (ACTIVE, ARCHIVED, RESOLVED)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the finding was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_findings">

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
    <td><CopyableCode code="action" /></td>
    <td><code>array</code></td>
    <td>The action in the analyzed policy statement that an external principal has permission to use.</td>
</tr>
<tr>
    <td><CopyableCode code="analyzedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the resource-based policy that generated the finding was analyzed.</td>
</tr>
<tr>
    <td><CopyableCode code="condition" /></td>
    <td><code>object</code></td>
    <td>The condition in the analyzed policy statement that resulted in a finding.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the finding was created.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>string</code></td>
    <td>The error that resulted in an Error finding.</td>
</tr>
<tr>
    <td><CopyableCode code="isPublic" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the finding reports a resource that has a policy that allows public access.</td>
</tr>
<tr>
    <td><CopyableCode code="principal" /></td>
    <td><code>object</code></td>
    <td>The external principal that has access to a resource within the zone of trust.</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>string</code></td>
    <td>The resource that the external principal has access to.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceControlPolicyRestriction" /></td>
    <td><code>string</code></td>
    <td>The type of restriction applied to the finding by the resource owner with an Organizations resource control policy (RCP). (APPLICABLE, FAILED_TO_EVALUATE_RCP, NOT_APPLICABLE, APPLIED)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceOwnerAccount" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID that owns the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>The type of the resource that the external principal has access to. (AWS::S3::Bucket, AWS::IAM::Role, AWS::SQS::Queue, AWS::Lambda::Function, AWS::Lambda::LayerVersion, AWS::KMS::Key, AWS::SecretsManager::Secret, AWS::EFS::FileSystem, AWS::EC2::Snapshot, AWS::ECR::Repository, AWS::RDS::DBSnapshot, AWS::RDS::DBClusterSnapshot, AWS::SNS::Topic, AWS::S3Express::DirectoryBucket, AWS::DynamoDB::Table, AWS::DynamoDB::Stream, AWS::IAM::User)</td>
</tr>
<tr>
    <td><CopyableCode code="sources" /></td>
    <td><code>array</code></td>
    <td>The sources of the finding. This indicates how the access that generated the finding is granted. It is populated for Amazon S3 bucket findings.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the finding. (ACTIVE, ARCHIVED, RESOLVED)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
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
    <td><a href="#get_finding"><CopyableCode code="get_finding" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-analyzerArn"><code>analyzerArn</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the specified finding. GetFinding and GetFindingV2 both use access-analyzer:GetFinding in the Action element of an IAM policy statement. You must have permission to perform the access-analyzer:GetFinding action. GetFinding is supported only for external access analyzers. You must use GetFindingV2 for internal and unused access analyzers.</td>
</tr>
<tr>
    <td><a href="#list_findings"><CopyableCode code="list_findings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of findings generated by the specified analyzer. ListFindings and ListFindingsV2 both use access-analyzer:ListFindings in the Action element of an IAM policy statement. You must have permission to perform the access-analyzer:ListFindings action. To learn about filter keys that you can use to retrieve a list of findings, see IAM Access Analyzer filter keys in the IAM User Guide. ListFindings is supported only for external access analyzers. You must use ListFindingsV2 for internal and unused access analyzers.</td>
</tr>
<tr>
    <td><a href="#update_findings"><CopyableCode code="update_findings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-analyzerArn"><code>analyzerArn</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td></td>
    <td>Updates the status for the specified findings.</td>
</tr>
<tr>
    <td><a href="#generate_finding_recommendation"><CopyableCode code="generate_finding_recommendation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-analyzerArn"><code>analyzerArn</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a recommendation for an unused permissions finding.</td>
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
    <td>The ARN of the analyzer used to generate the finding recommendation.</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique ID for the finding recommendation.</td>
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
    defaultValue="get_finding"
    values={[
        { label: 'get_finding', value: 'get_finding' },
        { label: 'list_findings', value: 'list_findings' }
    ]}
>
<TabItem value="get_finding">

Retrieves information about the specified finding. GetFinding and GetFindingV2 both use access-analyzer:GetFinding in the Action element of an IAM policy statement. You must have permission to perform the access-analyzer:GetFinding action. GetFinding is supported only for external access analyzers. You must use GetFindingV2 for internal and unused access analyzers.

```sql
SELECT
id,
action,
analyzedAt,
condition,
createdAt,
error,
isPublic,
principal,
resource,
resourceControlPolicyRestriction,
resourceOwnerAccount,
resourceType,
sources,
status,
updatedAt
FROM aws.accessanalyzer.findings
WHERE analyzerArn = '{{ analyzerArn }}' -- required
AND id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_findings">

Retrieves a list of findings generated by the specified analyzer. ListFindings and ListFindingsV2 both use access-analyzer:ListFindings in the Action element of an IAM policy statement. You must have permission to perform the access-analyzer:ListFindings action. To learn about filter keys that you can use to retrieve a list of findings, see IAM Access Analyzer filter keys in the IAM User Guide. ListFindings is supported only for external access analyzers. You must use ListFindingsV2 for internal and unused access analyzers.

```sql
SELECT
id,
action,
analyzedAt,
condition,
createdAt,
error,
isPublic,
principal,
resource,
resourceControlPolicyRestriction,
resourceOwnerAccount,
resourceType,
sources,
status,
updatedAt
FROM aws.accessanalyzer.findings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_findings"
    values={[
        { label: 'update_findings', value: 'update_findings' }
    ]}
>
<TabItem value="update_findings">

Updates the status for the specified findings.

```sql
UPDATE aws.accessanalyzer.findings
SET 
analyzerArn = '{{ analyzerArn }}',
status = '{{ status }}',
ids = '{{ ids }}',
resourceArn = '{{ resourceArn }}',
clientToken = '{{ clientToken }}'
WHERE 
region = '{{ region }}' --required
AND analyzerArn = '{{ analyzerArn }}' --required
AND status = '{{ status }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="generate_finding_recommendation"
    values={[
        { label: 'generate_finding_recommendation', value: 'generate_finding_recommendation' }
    ]}
>
<TabItem value="generate_finding_recommendation">

Creates a recommendation for an unused permissions finding.

```sql
EXEC aws.accessanalyzer.findings.generate_finding_recommendation 
@analyzerArn='{{ analyzerArn }}' --required, 
@id='{{ id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
