--- 
title: sync_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - sync_configurations
  - codestar_connections
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

Creates, updates, deletes, gets or lists a <code>sync_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sync_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codestar_connections.sync_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sync_configuration"
    values={[
        { label: 'get_sync_configuration', value: 'get_sync_configuration' },
        { label: 'list_sync_configurations', value: 'list_sync_configurations' }
    ]}
>
<TabItem value="get_sync_configuration">

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
    <td><CopyableCode code="Branch" /></td>
    <td><code>string</code></td>
    <td>The branch associated with a specific sync configuration. (pattern: &lt;code&gt;^.*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ConfigFile" /></td>
    <td><code>string</code></td>
    <td>The file path to the configuration file associated with a specific sync configuration. The path should point to an actual file in the sync configurations linked repository.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>The owner ID for the repository associated with a specific sync configuration, such as the owner ID in GitHub. (pattern: &lt;code&gt;^.*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ProviderType" /></td>
    <td><code>string</code></td>
    <td>The connection provider type associated with a specific sync configuration, such as GitHub. (Bitbucket, GitHub, GitHubEnterpriseServer, GitLab, GitLabSelfManaged)</td>
</tr>
<tr>
    <td><CopyableCode code="PublishDeploymentStatus" /></td>
    <td><code>string</code></td>
    <td>Whether to enable or disable publishing of deployment status to source providers. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="RepositoryLinkId" /></td>
    <td><code>string</code></td>
    <td>The ID of the repository link associated with a specific sync configuration. (pattern: &lt;code&gt;^&#91;0-9a-fA-F&#93;&#123;8&#125;\b-&#91;0-9a-fA-F&#93;&#123;4&#125;\b-&#91;0-9a-fA-F&#93;&#123;4&#125;\b-&#91;0-9a-fA-F&#93;&#123;4&#125;\b-&#91;0-9a-fA-F&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RepositoryName" /></td>
    <td><code>string</code></td>
    <td>The name of the repository associated with a specific sync configuration. (pattern: &lt;code&gt;^.*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceName" /></td>
    <td><code>string</code></td>
    <td>The name of the connection resource associated with a specific sync configuration. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role associated with a specific sync configuration. (pattern: &lt;code&gt;arn:aws(-&#91;\w&#93;+)*:iam::\d&#123;12&#125;:role/&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SyncType" /></td>
    <td><code>string</code></td>
    <td>The type of sync for a specific sync configuration. (CFN_STACK_SYNC)</td>
</tr>
<tr>
    <td><CopyableCode code="TriggerResourceUpdateOn" /></td>
    <td><code>string</code></td>
    <td>When to trigger Git sync to begin the stack update. (ANY_CHANGE, FILE_CHANGE)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_sync_configurations">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>An enumeration token that allows the operation to batch the next results of the operation. (pattern: &lt;code&gt;^.*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SyncConfigurations" /></td>
    <td><code>array</code></td>
    <td>The list of repository sync definitions returned by the request.</td>
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
    <td><a href="#get_sync_configuration"><CopyableCode code="get_sync_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details about a sync configuration, including the sync type and resource name. A sync configuration allows the configuration to sync (push and pull) changes from the remote repository for a specified branch in a Git repository.</td>
</tr>
<tr>
    <td><a href="#list_sync_configurations"><CopyableCode code="list_sync_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of sync configurations for a specified repository.</td>
</tr>
<tr>
    <td><a href="#create_sync_configuration"><CopyableCode code="create_sync_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Branch"><code>Branch</code></a>, <a href="#parameter-ConfigFile"><code>ConfigFile</code></a>, <a href="#parameter-RepositoryLinkId"><code>RepositoryLinkId</code></a>, <a href="#parameter-ResourceName"><code>ResourceName</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a>, <a href="#parameter-SyncType"><code>SyncType</code></a></td>
    <td></td>
    <td>Creates a sync configuration which allows Amazon Web Services to sync content from a Git repository to update a specified Amazon Web Services resource. Parameters for the sync configuration are determined by the sync type.</td>
</tr>
<tr>
    <td><a href="#update_sync_configuration"><CopyableCode code="update_sync_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceName"><code>ResourceName</code></a>, <a href="#parameter-SyncType"><code>SyncType</code></a></td>
    <td></td>
    <td>Updates the sync configuration for your connection and a specified external Git repository.</td>
</tr>
<tr>
    <td><a href="#delete_sync_configuration"><CopyableCode code="delete_sync_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the sync configuration for a specified repository and connection.</td>
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
    defaultValue="get_sync_configuration"
    values={[
        { label: 'get_sync_configuration', value: 'get_sync_configuration' },
        { label: 'list_sync_configurations', value: 'list_sync_configurations' }
    ]}
>
<TabItem value="get_sync_configuration">

Returns details about a sync configuration, including the sync type and resource name. A sync configuration allows the configuration to sync (push and pull) changes from the remote repository for a specified branch in a Git repository.

```sql
SELECT
Branch,
ConfigFile,
OwnerId,
ProviderType,
PublishDeploymentStatus,
RepositoryLinkId,
RepositoryName,
ResourceName,
RoleArn,
SyncType,
TriggerResourceUpdateOn
FROM aws.codestar_connections.sync_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_sync_configurations">

Returns a list of sync configurations for a specified repository.

```sql
SELECT
NextToken,
SyncConfigurations
FROM aws.codestar_connections.sync_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_sync_configuration"
    values={[
        { label: 'create_sync_configuration', value: 'create_sync_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_sync_configuration">

Creates a sync configuration which allows Amazon Web Services to sync content from a Git repository to update a specified Amazon Web Services resource. Parameters for the sync configuration are determined by the sync type.

```sql
INSERT INTO aws.codestar_connections.sync_configurations (
Branch,
ConfigFile,
RepositoryLinkId,
ResourceName,
RoleArn,
SyncType,
PublishDeploymentStatus,
TriggerResourceUpdateOn,
region
)
SELECT 
'{{ Branch }}' /* required */,
'{{ ConfigFile }}' /* required */,
'{{ RepositoryLinkId }}' /* required */,
'{{ ResourceName }}' /* required */,
'{{ RoleArn }}' /* required */,
'{{ SyncType }}' /* required */,
'{{ PublishDeploymentStatus }}',
'{{ TriggerResourceUpdateOn }}',
'{{ region }}'
RETURNING
SyncConfiguration
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: sync_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the sync_configurations resource.
    - name: Branch
      value: "{{ Branch }}"
      description: |
        The branch in the repository from which changes will be synced.
    - name: ConfigFile
      value: "{{ ConfigFile }}"
      description: |
        The file name of the configuration file that manages syncing between the connection and the repository. This configuration file is stored in the repository.
    - name: RepositoryLinkId
      value: "{{ RepositoryLinkId }}"
      description: |
        The ID of the repository link created for the connection. A repository link allows Git sync to monitor and sync changes to files in a specified Git repository.
    - name: ResourceName
      value: "{{ ResourceName }}"
      description: |
        The name of the Amazon Web Services resource (for example, a CloudFormation stack in the case of CFN_STACK_SYNC) that will be synchronized from the linked repository.
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        The ARN of the IAM role that grants permission for Amazon Web Services to use Git sync to update a given Amazon Web Services resource on your behalf.
    - name: SyncType
      value: "{{ SyncType }}"
      description: |
        The type of sync configuration.
      valid_values: ['CFN_STACK_SYNC']
    - name: PublishDeploymentStatus
      value: "{{ PublishDeploymentStatus }}"
      description: |
        Whether to enable or disable publishing of deployment status to source providers.
      valid_values: ['ENABLED', 'DISABLED']
    - name: TriggerResourceUpdateOn
      value: "{{ TriggerResourceUpdateOn }}"
      description: |
        When to trigger Git sync to begin the stack update.
      valid_values: ['ANY_CHANGE', 'FILE_CHANGE']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_sync_configuration"
    values={[
        { label: 'update_sync_configuration', value: 'update_sync_configuration' }
    ]}
>
<TabItem value="update_sync_configuration">

Updates the sync configuration for your connection and a specified external Git repository.

```sql
UPDATE aws.codestar_connections.sync_configurations
SET 
Branch = '{{ Branch }}',
ConfigFile = '{{ ConfigFile }}',
RepositoryLinkId = '{{ RepositoryLinkId }}',
ResourceName = '{{ ResourceName }}',
RoleArn = '{{ RoleArn }}',
SyncType = '{{ SyncType }}',
PublishDeploymentStatus = '{{ PublishDeploymentStatus }}',
TriggerResourceUpdateOn = '{{ TriggerResourceUpdateOn }}'
WHERE 
region = '{{ region }}' --required
AND ResourceName = '{{ ResourceName }}' --required
AND SyncType = '{{ SyncType }}' --required
RETURNING
SyncConfiguration;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_sync_configuration"
    values={[
        { label: 'delete_sync_configuration', value: 'delete_sync_configuration' }
    ]}
>
<TabItem value="delete_sync_configuration">

Deletes the sync configuration for a specified repository and connection.

```sql
DELETE FROM aws.codestar_connections.sync_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
