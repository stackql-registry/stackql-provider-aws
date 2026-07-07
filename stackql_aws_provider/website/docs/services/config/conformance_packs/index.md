--- 
title: conformance_packs
hide_title: false
hide_table_of_contents: false
keywords:
  - conformance_packs
  - config
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

Creates, updates, deletes, gets or lists a <code>conformance_packs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="conformance_packs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.config.conformance_packs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_conformance_packs"
    values={[
        { label: 'describe_conformance_packs', value: 'describe_conformance_packs' }
    ]}
>
<TabItem value="describe_conformance_packs">

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
    <td><CopyableCode code="ConformancePackArn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the conformance pack.</td>
</tr>
<tr>
    <td><CopyableCode code="ConformancePackId" /></td>
    <td><code>string</code></td>
    <td>ID of the conformance pack.</td>
</tr>
<tr>
    <td><CopyableCode code="ConformancePackInputParameters" /></td>
    <td><code>array</code></td>
    <td>A list of ConformancePackInputParameter objects.</td>
</tr>
<tr>
    <td><CopyableCode code="ConformancePackName" /></td>
    <td><code>string</code></td>
    <td>Name of the conformance pack. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;-a-zA-Z0-9&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedBy" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services service that created the conformance pack.</td>
</tr>
<tr>
    <td><CopyableCode code="DeliveryS3Bucket" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon S3 bucket where Config stores conformance pack templates. This field is optional.</td>
</tr>
<tr>
    <td><CopyableCode code="DeliveryS3KeyPrefix" /></td>
    <td><code>string</code></td>
    <td>The prefix for the Amazon S3 bucket. This field is optional.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdateRequestedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time a conformation pack update was requested.</td>
</tr>
<tr>
    <td><CopyableCode code="TemplateSSMDocumentDetails" /></td>
    <td><code>object</code></td>
    <td>An object that contains the name or Amazon Resource Name (ARN) of the Amazon Web Services Systems Manager document (SSM document) and the version of the SSM document that is used to create a conformance pack.</td>
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
    <td><a href="#describe_conformance_packs"><CopyableCode code="describe_conformance_packs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of one or more conformance packs.</td>
</tr>
<tr>
    <td><a href="#put_conformance_pack"><CopyableCode code="put_conformance_pack" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConformancePackName"><code>ConformancePackName</code></a></td>
    <td></td>
    <td>Creates or updates a conformance pack. A conformance pack is a collection of Config rules that can be easily deployed in an account and a region and across an organization. For information on how many conformance packs you can have per account, see Service Limits in the Config Developer Guide. When you use PutConformancePack to deploy conformance packs in your account, the operation can create Config rules and remediation actions without requiring config:PutConfigRule or config:PutRemediationConfigurations permissions in your account IAM policies. This API uses the AWSServiceRoleForConfigConforms service-linked role in your account to create conformance pack resources. This service-linked role includes the permissions to create Config rules and remediation configurations, even if your account IAM policies explicitly deny these actions. This API creates a service-linked role AWSServiceRoleForConfigConforms in your account. The service-linked role is created only when the role does not exist in your account. You must specify only one of the follow parameters: TemplateS3Uri, TemplateBody or TemplateSSMDocumentDetails. Tags are added at creation and cannot be updated with this operation PutConformancePack is an idempotent API. Subsequent requests won't create a duplicate resource if one was already created. If a following request has different tags values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, tags will not be updated, even if they are different. Use TagResource and UntagResource to update tags after creation.</td>
</tr>
<tr>
    <td><a href="#delete_conformance_pack"><CopyableCode code="delete_conformance_pack" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified conformance pack and all the Config rules, remediation actions, and all evaluation results within that conformance pack. Config sets the conformance pack to DELETE_IN_PROGRESS until the deletion is complete. You cannot update a conformance pack while it is in this state. Recommendation: Consider excluding the AWS::Config::ResourceCompliance resource type from recording before deleting rules Deleting rules creates configuration items (CIs) for AWS::Config::ResourceCompliance that can affect your costs for the configuration recorder. If you are deleting rules which evaluate a large number of resource types, this can lead to a spike in the number of CIs recorded. To avoid the associated costs, you can opt to disable recording for the AWS::Config::ResourceCompliance resource type before deleting rules, and re-enable recording after the rules have been deleted. However, since deleting rules is an asynchronous process, it might take an hour or more to complete. During the time when recording is disabled for AWS::Config::ResourceCompliance, rule evaluations will not be recorded in the associated resource’s history.</td>
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
    defaultValue="describe_conformance_packs"
    values={[
        { label: 'describe_conformance_packs', value: 'describe_conformance_packs' }
    ]}
>
<TabItem value="describe_conformance_packs">

Returns a list of one or more conformance packs.

```sql
SELECT
ConformancePackArn,
ConformancePackId,
ConformancePackInputParameters,
ConformancePackName,
CreatedBy,
DeliveryS3Bucket,
DeliveryS3KeyPrefix,
LastUpdateRequestedTime,
TemplateSSMDocumentDetails
FROM aws.config.conformance_packs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_conformance_pack"
    values={[
        { label: 'put_conformance_pack', value: 'put_conformance_pack' }
    ]}
>
<TabItem value="put_conformance_pack">

Creates or updates a conformance pack. A conformance pack is a collection of Config rules that can be easily deployed in an account and a region and across an organization. For information on how many conformance packs you can have per account, see Service Limits in the Config Developer Guide. When you use PutConformancePack to deploy conformance packs in your account, the operation can create Config rules and remediation actions without requiring config:PutConfigRule or config:PutRemediationConfigurations permissions in your account IAM policies. This API uses the AWSServiceRoleForConfigConforms service-linked role in your account to create conformance pack resources. This service-linked role includes the permissions to create Config rules and remediation configurations, even if your account IAM policies explicitly deny these actions. This API creates a service-linked role AWSServiceRoleForConfigConforms in your account. The service-linked role is created only when the role does not exist in your account. You must specify only one of the follow parameters: TemplateS3Uri, TemplateBody or TemplateSSMDocumentDetails. Tags are added at creation and cannot be updated with this operation PutConformancePack is an idempotent API. Subsequent requests won't create a duplicate resource if one was already created. If a following request has different tags values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, tags will not be updated, even if they are different. Use TagResource and UntagResource to update tags after creation.

```sql
REPLACE aws.config.conformance_packs
SET 
ConformancePackName = '{{ ConformancePackName }}',
TemplateS3Uri = '{{ TemplateS3Uri }}',
TemplateBody = '{{ TemplateBody }}',
DeliveryS3Bucket = '{{ DeliveryS3Bucket }}',
DeliveryS3KeyPrefix = '{{ DeliveryS3KeyPrefix }}',
ConformancePackInputParameters = '{{ ConformancePackInputParameters }}',
TemplateSSMDocumentDetails = '{{ TemplateSSMDocumentDetails }}',
Tags = '{{ Tags }}'
WHERE 
region = '{{ region }}' --required
AND ConformancePackName = '{{ ConformancePackName }}' --required
RETURNING
ConformancePackArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_conformance_pack"
    values={[
        { label: 'delete_conformance_pack', value: 'delete_conformance_pack' }
    ]}
>
<TabItem value="delete_conformance_pack">

Deletes the specified conformance pack and all the Config rules, remediation actions, and all evaluation results within that conformance pack. Config sets the conformance pack to DELETE_IN_PROGRESS until the deletion is complete. You cannot update a conformance pack while it is in this state. Recommendation: Consider excluding the AWS::Config::ResourceCompliance resource type from recording before deleting rules Deleting rules creates configuration items (CIs) for AWS::Config::ResourceCompliance that can affect your costs for the configuration recorder. If you are deleting rules which evaluate a large number of resource types, this can lead to a spike in the number of CIs recorded. To avoid the associated costs, you can opt to disable recording for the AWS::Config::ResourceCompliance resource type before deleting rules, and re-enable recording after the rules have been deleted. However, since deleting rules is an asynchronous process, it might take an hour or more to complete. During the time when recording is disabled for AWS::Config::ResourceCompliance, rule evaluations will not be recorded in the associated resource’s history.

```sql
DELETE FROM aws.config.conformance_packs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
