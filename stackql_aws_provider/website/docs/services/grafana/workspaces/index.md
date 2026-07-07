--- 
title: workspaces
hide_title: false
hide_table_of_contents: false
keywords:
  - workspaces
  - grafana
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

Creates, updates, deletes, gets or lists a <code>workspaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workspaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.grafana.workspaces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_workspace"
    values={[
        { label: 'describe_workspace', value: 'describe_workspace' },
        { label: 'list_workspaces', value: 'list_workspaces' }
    ]}
>
<TabItem value="describe_workspace">

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
    <td>The unique ID of this workspace. (pattern: &lt;code&gt;g-&#91;0-9a-f&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the workspace. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-._~&#93;&#123;1,255&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="accountAccessType" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the workspace can access Amazon Web Services resources in this Amazon Web Services account only, or whether it can also access Amazon Web Services resources in other accounts in the same organization. If this is ORGANIZATION, the workspaceOrganizationalUnits parameter specifies which organizational units the workspace can access. (CURRENT_ACCOUNT, ORGANIZATION)</td>
</tr>
<tr>
    <td><CopyableCode code="authentication" /></td>
    <td><code>object</code></td>
    <td>A structure that describes whether the workspace uses SAML, IAM Identity Center, or both methods for user authentication.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the workspace was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataSources" /></td>
    <td><code>array</code></td>
    <td>Specifies the Amazon Web Services data sources that have been configured to have IAM roles and permissions created to allow Amazon Managed Grafana to read data from these sources. This list is only used when the workspace was created through the Amazon Web Services console, and the permissionType is SERVICE_MANAGED.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The user-defined description of the workspace.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>The URL that users can use to access the Grafana console in the workspace.</td>
</tr>
<tr>
    <td><CopyableCode code="freeTrialConsumed" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether this workspace has already fully used its free trial for Grafana Enterprise. Amazon Managed Grafana workspaces no longer support Grafana Enterprise free trials.</td>
</tr>
<tr>
    <td><CopyableCode code="freeTrialExpiration" /></td>
    <td><code>string (date-time)</code></td>
    <td>If this workspace is currently in the free trial period for Grafana Enterprise, this value specifies when that free trial ends. Amazon Managed Grafana workspaces no longer support Grafana Enterprise free trials.</td>
</tr>
<tr>
    <td><CopyableCode code="grafanaToken" /></td>
    <td><code>string</code></td>
    <td>The token that ties this workspace to a Grafana Labs account. For more information, see Link your account with Grafana Labs.</td>
</tr>
<tr>
    <td><CopyableCode code="grafanaVersion" /></td>
    <td><code>string</code></td>
    <td>The version of Grafana supported in this workspace.</td>
</tr>
<tr>
    <td><CopyableCode code="ipAddressType" /></td>
    <td><code>string</code></td>
    <td>The type of IP addresses supported for connection to the workspace. Valid values are IPv4 and DualStack. (IPv4, DualStack)</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The ID or ARN of the Key Management Service key used for encrypting workspace data. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:/_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="licenseExpiration" /></td>
    <td><code>string (date-time)</code></td>
    <td>If this workspace has a full Grafana Enterprise license purchased through Amazon Web Services Marketplace, this specifies when the license ends and will need to be renewed. Purchasing the Enterprise plugins option through Amazon Managed Grafana does not have an expiration. It is valid until the license is removed.</td>
</tr>
<tr>
    <td><CopyableCode code="licenseType" /></td>
    <td><code>string</code></td>
    <td>Specifies whether this workspace has a full Grafana Enterprise license. Amazon Managed Grafana workspaces no longer support Grafana Enterprise free trials. (ENTERPRISE, ENTERPRISE_FREE_TRIAL)</td>
</tr>
<tr>
    <td><CopyableCode code="modified" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent date that the workspace was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="networkAccessControl" /></td>
    <td><code>object</code></td>
    <td>The configuration settings for network access to your workspace.</td>
</tr>
<tr>
    <td><CopyableCode code="notificationDestinations" /></td>
    <td><code>array</code></td>
    <td>The Amazon Web Services notification channels that Amazon Managed Grafana can automatically create IAM roles and permissions for, to allow Amazon Managed Grafana to use these channels.</td>
</tr>
<tr>
    <td><CopyableCode code="organizationRoleName" /></td>
    <td><code>string</code></td>
    <td>The name of the IAM role that is used to access resources through Organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="organizationalUnits" /></td>
    <td><code>array</code></td>
    <td>Specifies the organizational units that this workspace is allowed to use data sources from, if this workspace is in an account that is part of an organization.</td>
</tr>
<tr>
    <td><CopyableCode code="permissionType" /></td>
    <td><code>string</code></td>
    <td>If this is SERVICE_MANAGED, and the workplace was created through the Amazon Managed Grafana console, then Amazon Managed Grafana automatically creates the IAM roles and provisions the permissions that the workspace needs to use Amazon Web Services data sources and notification channels. If this is CUSTOMER_MANAGED, you must manage those roles and permissions yourself. If you are working with a workspace in a member account of an organization and that account is not a delegated administrator account, and you want the workspace to access data sources in other Amazon Web Services accounts in the organization, this parameter must be set to CUSTOMER_MANAGED. For more information about converting between customer and service managed, see Managing permissions for data sources and notification channels. For more information about the roles and permissions that must be managed for customer managed workspaces, see Amazon Managed Grafana permissions and policies for Amazon Web Services data sources and notification channels (CUSTOMER_MANAGED, SERVICE_MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="stackSetName" /></td>
    <td><code>string</code></td>
    <td>The name of the CloudFormation stack set that is used to generate IAM roles to be used for this workspace.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the workspace. (ACTIVE, CREATING, DELETING, FAILED, UPDATING, UPGRADING, DELETION_FAILED, CREATION_FAILED, UPDATE_FAILED, UPGRADE_FAILED, LICENSE_REMOVAL_FAILED, VERSION_UPDATING, VERSION_UPDATE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The list of tags associated with the workspace.</td>
</tr>
<tr>
    <td><CopyableCode code="vpcConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration for connecting to data sources in a private VPC (Amazon Virtual Private Cloud).</td>
</tr>
<tr>
    <td><CopyableCode code="workspaceRoleArn" /></td>
    <td><code>string</code></td>
    <td>The IAM role that grants permissions to the Amazon Web Services resources that the workspace will view data from. This role must already exist.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_workspaces">

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
    <td>The unique ID of the workspace. (pattern: &lt;code&gt;g-&#91;0-9a-f&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the workspace. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-._~&#93;&#123;1,255&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="authentication" /></td>
    <td><code>object</code></td>
    <td>A structure containing information about the authentication methods used in the workspace.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the workspace was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The customer-entered description of the workspace.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>The URL endpoint to use to access the Grafana console in the workspace.</td>
</tr>
<tr>
    <td><CopyableCode code="grafanaToken" /></td>
    <td><code>string</code></td>
    <td>The token that ties this workspace to a Grafana Labs account. For more information, see Link your account with Grafana Labs.</td>
</tr>
<tr>
    <td><CopyableCode code="grafanaVersion" /></td>
    <td><code>string</code></td>
    <td>The Grafana version that the workspace is running.</td>
</tr>
<tr>
    <td><CopyableCode code="licenseType" /></td>
    <td><code>string</code></td>
    <td>Specifies whether this workspace has a full Grafana Enterprise license. Amazon Managed Grafana workspaces no longer support Grafana Enterprise free trials. (ENTERPRISE, ENTERPRISE_FREE_TRIAL)</td>
</tr>
<tr>
    <td><CopyableCode code="modified" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent date that the workspace was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="notificationDestinations" /></td>
    <td><code>array</code></td>
    <td>The Amazon Web Services notification channels that Amazon Managed Grafana can automatically create IAM roles and permissions for, which allows Amazon Managed Grafana to use these channels.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the workspace. (ACTIVE, CREATING, DELETING, FAILED, UPDATING, UPGRADING, DELETION_FAILED, CREATION_FAILED, UPDATE_FAILED, UPGRADE_FAILED, LICENSE_REMOVAL_FAILED, VERSION_UPDATING, VERSION_UPDATE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The list of tags associated with the workspace.</td>
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
    <td><a href="#describe_workspace"><CopyableCode code="describe_workspace" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Displays information about one Amazon Managed Grafana workspace.</td>
</tr>
<tr>
    <td><a href="#list_workspaces"><CopyableCode code="list_workspaces" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of Amazon Managed Grafana workspaces in the account, with some information about each workspace. For more complete information about one workspace, use DescribeWorkspace.</td>
</tr>
<tr>
    <td><a href="#create_workspace_api_key"><CopyableCode code="create_workspace_api_key" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-keyName"><code>keyName</code></a>, <a href="#parameter-keyRole"><code>keyRole</code></a>, <a href="#parameter-secondsToLive"><code>secondsToLive</code></a></td>
    <td></td>
    <td>Creates a Grafana API key for the workspace. This key can be used to authenticate requests sent to the workspace's HTTP API. See https:​//docs.aws.amazon.com/grafana/latest/userguide/Using-Grafana-APIs.html for available APIs and example requests. In workspaces compatible with Grafana version 9 or above, use workspace service accounts instead of API keys. API keys will be removed in a future release.</td>
</tr>
<tr>
    <td><a href="#create_workspace"><CopyableCode code="create_workspace" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-accountAccessType"><code>accountAccessType</code></a>, <a href="#parameter-permissionType"><code>permissionType</code></a>, <a href="#parameter-authenticationProviders"><code>authenticationProviders</code></a></td>
    <td></td>
    <td>Creates a workspace. In a workspace, you can create Grafana dashboards and visualizations to analyze your metrics, logs, and traces. You don't have to build, package, or deploy any hardware to run the Grafana server. Don't use CreateWorkspace to modify an existing workspace. Instead, use UpdateWorkspace.</td>
</tr>
<tr>
    <td><a href="#associate_license"><CopyableCode code="associate_license" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-license_type"><code>license_type</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Grafana-Token"><code>Grafana-Token</code></a></td>
    <td>Assigns a Grafana Enterprise license to a workspace. To upgrade, you must use ENTERPRISE for the licenseType, and pass in a valid Grafana Labs token for the grafanaToken. Upgrading to Grafana Enterprise incurs additional fees. For more information, see Upgrade a workspace to Grafana Enterprise.</td>
</tr>
<tr>
    <td><a href="#update_workspace"><CopyableCode code="update_workspace" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Modifies an existing Amazon Managed Grafana workspace. If you use this operation and omit any optional parameters, the existing values of those parameters are not changed. To modify the user authentication methods that the workspace uses, such as SAML or IAM Identity Center, use UpdateWorkspaceAuthentication. To modify which users in the workspace have the Admin and Editor Grafana roles, use UpdatePermissions.</td>
</tr>
<tr>
    <td><a href="#delete_workspace_api_key"><CopyableCode code="delete_workspace_api_key" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-key_name"><code>key_name</code></a>, <a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Grafana API key for the workspace. In workspaces compatible with Grafana version 9 or above, use workspace service accounts instead of API keys. API keys will be removed in a future release.</td>
</tr>
<tr>
    <td><a href="#delete_workspace"><CopyableCode code="delete_workspace" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon Managed Grafana workspace.</td>
</tr>
<tr>
    <td><a href="#disassociate_license"><CopyableCode code="disassociate_license" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-license_type"><code>license_type</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the Grafana Enterprise license from a workspace.</td>
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
<tr id="parameter-key_name">
    <td><CopyableCode code="key_name" /></td>
    <td><code>string</code></td>
    <td>The name of the API key to delete.</td>
</tr>
<tr id="parameter-license_type">
    <td><CopyableCode code="license_type" /></td>
    <td><code>string</code></td>
    <td>The type of license to remove from the workspace.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-workspace_id">
    <td><CopyableCode code="workspace_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the workspace to remove the Grafana Enterprise license from.</td>
</tr>
<tr id="parameter-Grafana-Token">
    <td><CopyableCode code="Grafana-Token" /></td>
    <td><code>string</code></td>
    <td>A token from Grafana Labs that ties your Amazon Web Services account with a Grafana Labs account. For more information, see Link your account with Grafana Labs.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of workspaces to include in the results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of workspaces to return. (You receive this token from a previous ListWorkspaces operation.)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_workspace"
    values={[
        { label: 'describe_workspace', value: 'describe_workspace' },
        { label: 'list_workspaces', value: 'list_workspaces' }
    ]}
>
<TabItem value="describe_workspace">

Displays information about one Amazon Managed Grafana workspace.

```sql
SELECT
id,
name,
accountAccessType,
authentication,
created,
dataSources,
description,
endpoint,
freeTrialConsumed,
freeTrialExpiration,
grafanaToken,
grafanaVersion,
ipAddressType,
kmsKeyId,
licenseExpiration,
licenseType,
modified,
networkAccessControl,
notificationDestinations,
organizationRoleName,
organizationalUnits,
permissionType,
stackSetName,
status,
tags,
vpcConfiguration,
workspaceRoleArn
FROM aws.grafana.workspaces
WHERE workspace_id = '{{ workspace_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_workspaces">

Returns a list of Amazon Managed Grafana workspaces in the account, with some information about each workspace. For more complete information about one workspace, use DescribeWorkspace.

```sql
SELECT
id,
name,
authentication,
created,
description,
endpoint,
grafanaToken,
grafanaVersion,
licenseType,
modified,
notificationDestinations,
status,
tags
FROM aws.grafana.workspaces
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_workspace_api_key"
    values={[
        { label: 'create_workspace_api_key', value: 'create_workspace_api_key' },
        { label: 'create_workspace', value: 'create_workspace' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_workspace_api_key">

Creates a Grafana API key for the workspace. This key can be used to authenticate requests sent to the workspace's HTTP API. See https://docs.aws.amazon.com/grafana/latest/userguide/Using-Grafana-APIs.html for available APIs and example requests. In workspaces compatible with Grafana version 9 or above, use workspace service accounts instead of API keys. API keys will be removed in a future release.

```sql
INSERT INTO aws.grafana.workspaces (
keyName,
keyRole,
secondsToLive,
workspace_id,
region
)
SELECT 
'{{ keyName }}' /* required */,
'{{ keyRole }}' /* required */,
{{ secondsToLive }} /* required */,
'{{ workspace_id }}',
'{{ region }}'
RETURNING
key,
keyName,
workspaceId
;
```
</TabItem>
<TabItem value="create_workspace">

Creates a workspace. In a workspace, you can create Grafana dashboards and visualizations to analyze your metrics, logs, and traces. You don't have to build, package, or deploy any hardware to run the Grafana server. Don't use CreateWorkspace to modify an existing workspace. Instead, use UpdateWorkspace.

```sql
INSERT INTO aws.grafana.workspaces (
accountAccessType,
clientToken,
organizationRoleName,
permissionType,
stackSetName,
workspaceDataSources,
workspaceDescription,
workspaceName,
workspaceNotificationDestinations,
workspaceOrganizationalUnits,
workspaceRoleArn,
authenticationProviders,
tags,
vpcConfiguration,
configuration,
networkAccessControl,
grafanaVersion,
ipAddressType,
kmsKeyId,
region
)
SELECT 
'{{ accountAccessType }}' /* required */,
'{{ clientToken }}',
'{{ organizationRoleName }}',
'{{ permissionType }}' /* required */,
'{{ stackSetName }}',
'{{ workspaceDataSources }}',
'{{ workspaceDescription }}',
'{{ workspaceName }}',
'{{ workspaceNotificationDestinations }}',
'{{ workspaceOrganizationalUnits }}',
'{{ workspaceRoleArn }}',
'{{ authenticationProviders }}' /* required */,
'{{ tags }}',
'{{ vpcConfiguration }}',
'{{ configuration }}',
'{{ networkAccessControl }}',
'{{ grafanaVersion }}',
'{{ ipAddressType }}',
'{{ kmsKeyId }}',
'{{ region }}'
RETURNING
workspace
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: workspaces
  props:
    - name: workspace_id
      value: "{{ workspace_id }}"
      description: Required parameter for the workspaces resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the workspaces resource.
    - name: keyName
      value: "{{ keyName }}"
    - name: keyRole
      value: "{{ keyRole }}"
    - name: secondsToLive
      value: {{ secondsToLive }}
    - name: accountAccessType
      value: "{{ accountAccessType }}"
      valid_values: ['CURRENT_ACCOUNT', 'ORGANIZATION']
    - name: clientToken
      value: "{{ clientToken }}"
    - name: organizationRoleName
      value: "{{ organizationRoleName }}"
    - name: permissionType
      value: "{{ permissionType }}"
      valid_values: ['CUSTOMER_MANAGED', 'SERVICE_MANAGED']
    - name: stackSetName
      value: "{{ stackSetName }}"
    - name: workspaceDataSources
      value:
        - "{{ workspaceDataSources }}"
    - name: workspaceDescription
      value: "{{ workspaceDescription }}"
    - name: workspaceName
      value: "{{ workspaceName }}"
    - name: workspaceNotificationDestinations
      value:
        - "{{ workspaceNotificationDestinations }}"
    - name: workspaceOrganizationalUnits
      value:
        - "{{ workspaceOrganizationalUnits }}"
    - name: workspaceRoleArn
      value: "{{ workspaceRoleArn }}"
    - name: authenticationProviders
      value:
        - "{{ authenticationProviders }}"
    - name: tags
      value: "{{ tags }}"
    - name: vpcConfiguration
      description: |
        The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to. Provided securityGroupIds and subnetIds must be part of the same VPC. Connecting to a private VPC is not yet available in the Asia Pacific (Seoul) Region (ap-northeast-2).
      value:
        securityGroupIds:
          - "{{ securityGroupIds }}"
        subnetIds:
          - "{{ subnetIds }}"
    - name: configuration
      value: "{{ configuration }}"
    - name: networkAccessControl
      description: |
        The configuration settings for in-bound network access to your workspace. When this is configured, only listed IP addresses and VPC endpoints will be able to access your workspace. Standard Grafana authentication and authorization are still required. Access is granted to a caller that is in either the IP address list or the VPC endpoint list - they do not need to be in both. If this is not configured, or is removed, then all IP addresses and VPC endpoints are allowed. Standard Grafana authentication and authorization are still required. While both prefixListIds and vpceIds are required, you can pass in an empty array of strings for either parameter if you do not want to allow any of that type. If both are passed as empty arrays, no traffic is allowed to the workspace, because only explicitly allowed connections are accepted.
      value:
        prefixListIds:
          - "{{ prefixListIds }}"
        vpceIds:
          - "{{ vpceIds }}"
    - name: grafanaVersion
      value: "{{ grafanaVersion }}"
    - name: ipAddressType
      value: "{{ ipAddressType }}"
      valid_values: ['IPv4', 'DualStack']
    - name: kmsKeyId
      value: "{{ kmsKeyId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_license"
    values={[
        { label: 'associate_license', value: 'associate_license' },
        { label: 'update_workspace', value: 'update_workspace' }
    ]}
>
<TabItem value="associate_license">

Assigns a Grafana Enterprise license to a workspace. To upgrade, you must use ENTERPRISE for the licenseType, and pass in a valid Grafana Labs token for the grafanaToken. Upgrading to Grafana Enterprise incurs additional fees. For more information, see Upgrade a workspace to Grafana Enterprise.

```sql
UPDATE aws.grafana.workspaces
SET 
-- No updatable properties
WHERE 
workspace_id = '{{ workspace_id }}' --required
AND license_type = '{{ license_type }}' --required
AND region = '{{ region }}' --required
AND `Grafana-Token` = '{{ Grafana-Token}}'
RETURNING
workspace;
```
</TabItem>
<TabItem value="update_workspace">

Modifies an existing Amazon Managed Grafana workspace. If you use this operation and omit any optional parameters, the existing values of those parameters are not changed. To modify the user authentication methods that the workspace uses, such as SAML or IAM Identity Center, use UpdateWorkspaceAuthentication. To modify which users in the workspace have the Admin and Editor Grafana roles, use UpdatePermissions.

```sql
UPDATE aws.grafana.workspaces
SET 
accountAccessType = '{{ accountAccessType }}',
organizationRoleName = '{{ organizationRoleName }}',
permissionType = '{{ permissionType }}',
stackSetName = '{{ stackSetName }}',
workspaceDataSources = '{{ workspaceDataSources }}',
workspaceDescription = '{{ workspaceDescription }}',
workspaceName = '{{ workspaceName }}',
workspaceNotificationDestinations = '{{ workspaceNotificationDestinations }}',
workspaceOrganizationalUnits = '{{ workspaceOrganizationalUnits }}',
workspaceRoleArn = '{{ workspaceRoleArn }}',
vpcConfiguration = '{{ vpcConfiguration }}',
removeVpcConfiguration = {{ removeVpcConfiguration }},
networkAccessControl = '{{ networkAccessControl }}',
removeNetworkAccessConfiguration = {{ removeNetworkAccessConfiguration }},
ipAddressType = '{{ ipAddressType }}'
WHERE 
workspace_id = '{{ workspace_id }}' --required
AND region = '{{ region }}' --required
RETURNING
workspace;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_workspace_api_key"
    values={[
        { label: 'delete_workspace_api_key', value: 'delete_workspace_api_key' },
        { label: 'delete_workspace', value: 'delete_workspace' }
    ]}
>
<TabItem value="delete_workspace_api_key">

Deletes a Grafana API key for the workspace. In workspaces compatible with Grafana version 9 or above, use workspace service accounts instead of API keys. API keys will be removed in a future release.

```sql
DELETE FROM aws.grafana.workspaces
WHERE key_name = '{{ key_name }}' --required
AND workspace_id = '{{ workspace_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_workspace">

Deletes an Amazon Managed Grafana workspace.

```sql
DELETE FROM aws.grafana.workspaces
WHERE workspace_id = '{{ workspace_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_license"
    values={[
        { label: 'disassociate_license', value: 'disassociate_license' }
    ]}
>
<TabItem value="disassociate_license">

Removes the Grafana Enterprise license from a workspace.

```sql
EXEC aws.grafana.workspaces.disassociate_license 
@workspace_id='{{ workspace_id }}' --required, 
@license_type='{{ license_type }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
