--- 
title: organization_conformance_packs
hide_title: false
hide_table_of_contents: false
keywords:
  - organization_conformance_packs
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

Creates, updates, deletes, gets or lists an <code>organization_conformance_packs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="organization_conformance_packs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.config.organization_conformance_packs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_organization_conformance_packs"
    values={[
        { label: 'describe_organization_conformance_packs', value: 'describe_organization_conformance_packs' }
    ]}
>
<TabItem value="describe_organization_conformance_packs">

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
    <td><CopyableCode code="conformance_pack_input_parameters" /></td>
    <td><code>array</code></td>
    <td>A list of ConformancePackInputParameter objects.</td>
</tr>
<tr>
    <td><CopyableCode code="delivery_s3_bucket" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon S3 bucket where Config stores conformance pack templates. This field is optional.</td>
</tr>
<tr>
    <td><CopyableCode code="delivery_s3_key_prefix" /></td>
    <td><code>string</code></td>
    <td>Any folder structure you want to add to an Amazon S3 bucket. This field is optional.</td>
</tr>
<tr>
    <td><CopyableCode code="excluded_accounts" /></td>
    <td><code>array</code></td>
    <td>A comma-separated list of accounts excluded from organization conformance pack.</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last time when organization conformation pack was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="organization_conformance_pack_arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of organization conformance pack.</td>
</tr>
<tr>
    <td><CopyableCode code="organization_conformance_pack_name" /></td>
    <td><code>string</code></td>
    <td>The name you assign to an organization conformance pack. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;-a-zA-Z0-9&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#describe_organization_conformance_packs"><CopyableCode code="describe_organization_conformance_packs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of organization conformance packs. When you specify the limit and the next token, you receive a paginated response. Limit and next token are not applicable if you specify organization conformance packs names. They are only applicable, when you request all the organization conformance packs. For accounts within an organization If you deploy an organizational rule or conformance pack in an organization administrator account, and then establish a delegated administrator and deploy an organizational rule or conformance pack in the delegated administrator account, you won't be able to see the organizational rule or conformance pack in the organization administrator account from the delegated administrator account or see the organizational rule or conformance pack in the delegated administrator account from organization administrator account. The DescribeOrganizationConfigRules and DescribeOrganizationConformancePacks APIs can only see and interact with the organization-related resource that were deployed from within the account calling those APIs.</td>
</tr>
<tr>
    <td><a href="#put_organization_conformance_pack"><CopyableCode code="put_organization_conformance_pack" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OrganizationConformancePackName"><code>OrganizationConformancePackName</code></a></td>
    <td></td>
    <td>Deploys conformance packs across member accounts in an Amazon Web Services Organization. For information on how many organization conformance packs and how many Config rules you can have per account, see Service Limits in the Config Developer Guide. Only a management account and a delegated administrator can call this API. When calling this API with a delegated administrator, you must ensure Organizations ListDelegatedAdministrator permissions are added. An organization can have up to 3 delegated administrators. When you use PutOrganizationConformancePack to deploy conformance packs across member accounts, the operation can create Config rules and remediation actions without requiring config:PutConfigRule or config:PutRemediationConfigurations permissions in member account IAM policies. This API uses the AWSServiceRoleForConfigConforms service-linked role in each member account to create conformance pack resources. This service-linked role includes the permissions to create Config rules and remediation configurations, even if member account IAM policies explicitly deny these actions. This API enables organization service access for config-multiaccountsetup.amazonaws.com through the EnableAWSServiceAccess action and creates a service-linked role AWSServiceRoleForConfigMultiAccountSetup in the management or delegated administrator account of your organization. The service-linked role is created only when the role does not exist in the caller account. To use this API with delegated administrator, register a delegated administrator by calling Amazon Web Services Organization register-delegate-admin for config-multiaccountsetup.amazonaws.com. Prerequisite: Ensure you call EnableAllFeatures API to enable all features in an organization. You must specify either the TemplateS3Uri or the TemplateBody parameter, but not both. If you provide both Config uses the TemplateS3Uri parameter and ignores the TemplateBody parameter. Config sets the state of a conformance pack to CREATE_IN_PROGRESS and UPDATE_IN_PROGRESS until the conformance pack is created or updated. You cannot update a conformance pack while it is in this state.</td>
</tr>
<tr>
    <td><a href="#delete_organization_conformance_pack"><CopyableCode code="delete_organization_conformance_pack" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified organization conformance pack and all of the Config rules and remediation actions from all member accounts in that organization. Only a management account or a delegated administrator account can delete an organization conformance pack. When calling this API with a delegated administrator, you must ensure Organizations ListDelegatedAdministrator permissions are added. Config sets the state of a conformance pack to DELETE_IN_PROGRESS until the deletion is complete. You cannot update a conformance pack while it is in this state. Recommendation: Consider excluding the AWS::Config::ResourceCompliance resource type from recording before deleting rules Deleting rules creates configuration items (CIs) for AWS::Config::ResourceCompliance that can affect your costs for the configuration recorder. If you are deleting rules which evaluate a large number of resource types, this can lead to a spike in the number of CIs recorded. To avoid the associated costs, you can opt to disable recording for the AWS::Config::ResourceCompliance resource type before deleting rules, and re-enable recording after the rules have been deleted. However, since deleting rules is an asynchronous process, it might take an hour or more to complete. During the time when recording is disabled for AWS::Config::ResourceCompliance, rule evaluations will not be recorded in the associated resource’s history.</td>
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
    defaultValue="describe_organization_conformance_packs"
    values={[
        { label: 'describe_organization_conformance_packs', value: 'describe_organization_conformance_packs' }
    ]}
>
<TabItem value="describe_organization_conformance_packs">

Returns a list of organization conformance packs. When you specify the limit and the next token, you receive a paginated response. Limit and next token are not applicable if you specify organization conformance packs names. They are only applicable, when you request all the organization conformance packs. For accounts within an organization If you deploy an organizational rule or conformance pack in an organization administrator account, and then establish a delegated administrator and deploy an organizational rule or conformance pack in the delegated administrator account, you won't be able to see the organizational rule or conformance pack in the organization administrator account from the delegated administrator account or see the organizational rule or conformance pack in the delegated administrator account from organization administrator account. The DescribeOrganizationConfigRules and DescribeOrganizationConformancePacks APIs can only see and interact with the organization-related resource that were deployed from within the account calling those APIs.

```sql
SELECT
conformance_pack_input_parameters,
delivery_s3_bucket,
delivery_s3_key_prefix,
excluded_accounts,
last_update_time,
organization_conformance_pack_arn,
organization_conformance_pack_name
FROM aws.config.organization_conformance_packs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_organization_conformance_pack"
    values={[
        { label: 'put_organization_conformance_pack', value: 'put_organization_conformance_pack' }
    ]}
>
<TabItem value="put_organization_conformance_pack">

Deploys conformance packs across member accounts in an Amazon Web Services Organization. For information on how many organization conformance packs and how many Config rules you can have per account, see Service Limits in the Config Developer Guide. Only a management account and a delegated administrator can call this API. When calling this API with a delegated administrator, you must ensure Organizations ListDelegatedAdministrator permissions are added. An organization can have up to 3 delegated administrators. When you use PutOrganizationConformancePack to deploy conformance packs across member accounts, the operation can create Config rules and remediation actions without requiring config:PutConfigRule or config:PutRemediationConfigurations permissions in member account IAM policies. This API uses the AWSServiceRoleForConfigConforms service-linked role in each member account to create conformance pack resources. This service-linked role includes the permissions to create Config rules and remediation configurations, even if member account IAM policies explicitly deny these actions. This API enables organization service access for config-multiaccountsetup.amazonaws.com through the EnableAWSServiceAccess action and creates a service-linked role AWSServiceRoleForConfigMultiAccountSetup in the management or delegated administrator account of your organization. The service-linked role is created only when the role does not exist in the caller account. To use this API with delegated administrator, register a delegated administrator by calling Amazon Web Services Organization register-delegate-admin for config-multiaccountsetup.amazonaws.com. Prerequisite: Ensure you call EnableAllFeatures API to enable all features in an organization. You must specify either the TemplateS3Uri or the TemplateBody parameter, but not both. If you provide both Config uses the TemplateS3Uri parameter and ignores the TemplateBody parameter. Config sets the state of a conformance pack to CREATE_IN_PROGRESS and UPDATE_IN_PROGRESS until the conformance pack is created or updated. You cannot update a conformance pack while it is in this state.

```sql
REPLACE aws.config.organization_conformance_packs
SET 
OrganizationConformancePackName = '{{ OrganizationConformancePackName }}',
TemplateS3Uri = '{{ TemplateS3Uri }}',
TemplateBody = '{{ TemplateBody }}',
DeliveryS3Bucket = '{{ DeliveryS3Bucket }}',
DeliveryS3KeyPrefix = '{{ DeliveryS3KeyPrefix }}',
ConformancePackInputParameters = '{{ ConformancePackInputParameters }}',
ExcludedAccounts = '{{ ExcludedAccounts }}',
Tags = '{{ Tags }}'
WHERE 
region = '{{ region }}' --required
AND OrganizationConformancePackName = '{{ OrganizationConformancePackName }}' --required
RETURNING
organization_conformance_pack_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_organization_conformance_pack"
    values={[
        { label: 'delete_organization_conformance_pack', value: 'delete_organization_conformance_pack' }
    ]}
>
<TabItem value="delete_organization_conformance_pack">

Deletes the specified organization conformance pack and all of the Config rules and remediation actions from all member accounts in that organization. Only a management account or a delegated administrator account can delete an organization conformance pack. When calling this API with a delegated administrator, you must ensure Organizations ListDelegatedAdministrator permissions are added. Config sets the state of a conformance pack to DELETE_IN_PROGRESS until the deletion is complete. You cannot update a conformance pack while it is in this state. Recommendation: Consider excluding the AWS::Config::ResourceCompliance resource type from recording before deleting rules Deleting rules creates configuration items (CIs) for AWS::Config::ResourceCompliance that can affect your costs for the configuration recorder. If you are deleting rules which evaluate a large number of resource types, this can lead to a spike in the number of CIs recorded. To avoid the associated costs, you can opt to disable recording for the AWS::Config::ResourceCompliance resource type before deleting rules, and re-enable recording after the rules have been deleted. However, since deleting rules is an asynchronous process, it might take an hour or more to complete. During the time when recording is disabled for AWS::Config::ResourceCompliance, rule evaluations will not be recorded in the associated resource’s history.

```sql
DELETE FROM aws.config.organization_conformance_packs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
