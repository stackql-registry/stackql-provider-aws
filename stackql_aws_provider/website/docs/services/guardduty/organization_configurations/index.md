--- 
title: organization_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - organization_configurations
  - guardduty
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

Creates, updates, deletes, gets or lists an <code>organization_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="organization_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.guardduty.organization_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_organization_configuration"
    values={[
        { label: 'describe_organization_configuration', value: 'describe_organization_configuration' }
    ]}
>
<TabItem value="describe_organization_configuration">

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
    <td><CopyableCode code="AutoEnable" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether GuardDuty is automatically enabled for accounts added to the organization. Even though this is still supported, we recommend using AutoEnableOrganizationMembers to achieve the similar results.</td>
</tr>
<tr>
    <td><CopyableCode code="AutoEnableOrganizationMembers" /></td>
    <td><code>string</code></td>
    <td>Indicates the auto-enablement configuration of GuardDuty or any of the corresponding protection plans for the member accounts in the organization. NEW: Indicates that when a new account joins the organization, they will have GuardDuty or any of the corresponding protection plans enabled automatically. ALL: Indicates that all accounts in the organization have GuardDuty and any of the corresponding protection plans enabled automatically. This includes NEW accounts that join the organization and accounts that may have been suspended or removed from the organization in GuardDuty. NONE: Indicates that GuardDuty or any of the corresponding protection plans will not be automatically enabled for any account in the organization. The administrator must manage GuardDuty for each account in the organization individually. When you update the auto-enable setting from ALL or NEW to NONE, this action doesn't disable the corresponding option for your existing accounts. This configuration will apply to the new accounts that join the organization. After you update the auto-enable settings, no new account will have the corresponding option as enabled. (NEW, ALL, NONE)</td>
</tr>
<tr>
    <td><CopyableCode code="DataSources" /></td>
    <td><code>object</code></td>
    <td>Describes which data sources are enabled automatically for member accounts.</td>
</tr>
<tr>
    <td><CopyableCode code="Features" /></td>
    <td><code>array</code></td>
    <td>A list of features that are configured for this organization.</td>
</tr>
<tr>
    <td><CopyableCode code="MemberAccountLimitReached" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the maximum number of allowed member accounts are already associated with the delegated administrator account for your organization.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination parameter to be used on the next list operation to retrieve more items.</td>
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
    <td><a href="#describe_organization_configuration"><CopyableCode code="describe_organization_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns information about the account selected as the delegated administrator for GuardDuty. There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints.</td>
</tr>
<tr>
    <td><a href="#update_organization_configuration"><CopyableCode code="update_organization_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Configures the delegated administrator account with the provided values. You must provide a value for either autoEnableOrganizationMembers or autoEnable, but not both. Specifying both EKS Runtime Monitoring (EKS_RUNTIME_MONITORING) and Runtime Monitoring (RUNTIME_MONITORING) will cause an error. You can add only one of these two features because Runtime Monitoring already includes the threat detection for Amazon EKS resources. For more information, see Runtime Monitoring. There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints.</td>
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
<tr id="parameter-detector_id">
    <td><CopyableCode code="detector_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the detector that configures the delegated administrator. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>You can use this parameter to indicate the maximum number of items that you want in the response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_organization_configuration"
    values={[
        { label: 'describe_organization_configuration', value: 'describe_organization_configuration' }
    ]}
>
<TabItem value="describe_organization_configuration">

Returns information about the account selected as the delegated administrator for GuardDuty. There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints.

```sql
SELECT
AutoEnable,
AutoEnableOrganizationMembers,
DataSources,
Features,
MemberAccountLimitReached,
NextToken
FROM aws.guardduty.organization_configurations
WHERE detector_id = '{{ detector_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_organization_configuration"
    values={[
        { label: 'update_organization_configuration', value: 'update_organization_configuration' }
    ]}
>
<TabItem value="update_organization_configuration">

Configures the delegated administrator account with the provided values. You must provide a value for either autoEnableOrganizationMembers or autoEnable, but not both. Specifying both EKS Runtime Monitoring (EKS_RUNTIME_MONITORING) and Runtime Monitoring (RUNTIME_MONITORING) will cause an error. You can add only one of these two features because Runtime Monitoring already includes the threat detection for Amazon EKS resources. For more information, see Runtime Monitoring. There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see Regions and endpoints.

```sql
UPDATE aws.guardduty.organization_configurations
SET 
AutoEnable = {{ AutoEnable }},
DataSources = '{{ DataSources }}',
Features = '{{ Features }}',
AutoEnableOrganizationMembers = '{{ AutoEnableOrganizationMembers }}'
WHERE 
detector_id = '{{ detector_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
