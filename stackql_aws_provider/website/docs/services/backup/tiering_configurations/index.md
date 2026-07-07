--- 
title: tiering_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - tiering_configurations
  - backup
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

Creates, updates, deletes, gets or lists a <code>tiering_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tiering_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup.tiering_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_tiering_configuration"
    values={[
        { label: 'get_tiering_configuration', value: 'get_tiering_configuration' },
        { label: 'list_tiering_configurations', value: 'list_tiering_configurations' }
    ]}
>
<TabItem value="get_tiering_configuration">

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
    <td><CopyableCode code="BackupVaultName" /></td>
    <td><code>string</code></td>
    <td>The name of the backup vault where the tiering configuration applies. Use * to apply to all backup vaults. (pattern: &lt;code&gt;^(\*|&#91;a-zA-Z0-9\-\_&#93;&#123;2,50&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time a tiering configuration was created, in Unix format and Coordinated Universal Time (UTC). The value of CreationTime is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087AM.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatorRequestId" /></td>
    <td><code>string</code></td>
    <td>This is a unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time a tiering configuration was updated, in Unix format and Coordinated Universal Time (UTC). The value of LastUpdatedTime is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087AM.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceSelection" /></td>
    <td><code>array</code></td>
    <td>An array of resource selection objects that specify which resources are included in the tiering configuration and their tiering settings.</td>
</tr>
<tr>
    <td><CopyableCode code="TieringConfigurationArn" /></td>
    <td><code>string</code></td>
    <td>An Amazon Resource Name (ARN) that uniquely identifies the tiering configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="TieringConfigurationName" /></td>
    <td><code>string</code></td>
    <td>The unique name of the tiering configuration. This cannot be changed after creation, and it must consist of only alphanumeric characters and underscores. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_&#93;&#123;1,200&#125;$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_tiering_configurations">

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
    <td><CopyableCode code="BackupVaultName" /></td>
    <td><code>string</code></td>
    <td>The name of the backup vault where the tiering configuration applies. Use * to apply to all backup vaults. (pattern: &lt;code&gt;^(\*|&#91;a-zA-Z0-9\-\_&#93;&#123;2,50&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time a tiering configuration was created, in Unix format and Coordinated Universal Time (UTC). The value of CreationTime is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087AM.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time a tiering configuration was updated, in Unix format and Coordinated Universal Time (UTC). The value of LastUpdatedTime is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087AM.</td>
</tr>
<tr>
    <td><CopyableCode code="TieringConfigurationArn" /></td>
    <td><code>string</code></td>
    <td>An Amazon Resource Name (ARN) that uniquely identifies the tiering configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="TieringConfigurationName" /></td>
    <td><code>string</code></td>
    <td>The unique name of the tiering configuration. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_&#93;&#123;1,200&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#get_tiering_configuration"><CopyableCode code="get_tiering_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-tiering_configuration_name"><code>tiering_configuration_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns TieringConfiguration details for the specified TieringConfigurationName. The details are the body of a tiering configuration in JSON format, in addition to configuration metadata.</td>
</tr>
<tr>
    <td><a href="#list_tiering_configurations"><CopyableCode code="list_tiering_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of tiering configurations.</td>
</tr>
<tr>
    <td><a href="#create_tiering_configuration"><CopyableCode code="create_tiering_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TieringConfiguration"><code>TieringConfiguration</code></a></td>
    <td></td>
    <td>Creates a tiering configuration. A tiering configuration enables automatic movement of backup data to a lower-cost storage tier based on the age of backed-up objects in the backup vault. Each vault can only have one vault-specific tiering configuration, in addition to any global configuration that applies to all vaults.</td>
</tr>
<tr>
    <td><a href="#update_tiering_configuration"><CopyableCode code="update_tiering_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-tiering_configuration_name"><code>tiering_configuration_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TieringConfiguration"><code>TieringConfiguration</code></a></td>
    <td></td>
    <td>This request will send changes to your specified tiering configuration. TieringConfigurationName cannot be updated after it is created. ResourceSelection can contain: Resources TieringDownSettingsInDays ResourceType</td>
</tr>
<tr>
    <td><a href="#delete_tiering_configuration"><CopyableCode code="delete_tiering_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-tiering_configuration_name"><code>tiering_configuration_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the tiering configuration specified by a tiering configuration name.</td>
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
<tr id="parameter-tiering_configuration_name">
    <td><CopyableCode code="tiering_configuration_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of a tiering configuration.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to be returned.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The next item following a partial list of returned items. For example, if a request is made to return MaxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_tiering_configuration"
    values={[
        { label: 'get_tiering_configuration', value: 'get_tiering_configuration' },
        { label: 'list_tiering_configurations', value: 'list_tiering_configurations' }
    ]}
>
<TabItem value="get_tiering_configuration">

Returns TieringConfiguration details for the specified TieringConfigurationName. The details are the body of a tiering configuration in JSON format, in addition to configuration metadata.

```sql
SELECT
BackupVaultName,
CreationTime,
CreatorRequestId,
LastUpdatedTime,
ResourceSelection,
TieringConfigurationArn,
TieringConfigurationName
FROM aws.backup.tiering_configurations
WHERE tiering_configuration_name = '{{ tiering_configuration_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_tiering_configurations">

Returns a list of tiering configurations.

```sql
SELECT
BackupVaultName,
CreationTime,
LastUpdatedTime,
TieringConfigurationArn,
TieringConfigurationName
FROM aws.backup.tiering_configurations
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_tiering_configuration"
    values={[
        { label: 'create_tiering_configuration', value: 'create_tiering_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_tiering_configuration">

Creates a tiering configuration. A tiering configuration enables automatic movement of backup data to a lower-cost storage tier based on the age of backed-up objects in the backup vault. Each vault can only have one vault-specific tiering configuration, in addition to any global configuration that applies to all vaults.

```sql
INSERT INTO aws.backup.tiering_configurations (
TieringConfiguration,
TieringConfigurationTags,
CreatorRequestId,
region
)
SELECT 
'{{ TieringConfiguration }}' /* required */,
'{{ TieringConfigurationTags }}',
'{{ CreatorRequestId }}',
'{{ region }}'
RETURNING
CreationTime,
TieringConfigurationArn,
TieringConfigurationName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tiering_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the tiering_configurations resource.
    - name: TieringConfiguration
      description: |
        This contains metadata about a tiering configuration for create operations.
      value:
        TieringConfigurationName: "{{ TieringConfigurationName }}"
        BackupVaultName: "{{ BackupVaultName }}"
        ResourceSelection:
          - Resources: "{{ Resources }}"
            TieringDownSettingsInDays: {{ TieringDownSettingsInDays }}
            ResourceType: "{{ ResourceType }}"
    - name: TieringConfigurationTags
      value: "{{ TieringConfigurationTags }}"
    - name: CreatorRequestId
      value: "{{ CreatorRequestId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_tiering_configuration"
    values={[
        { label: 'update_tiering_configuration', value: 'update_tiering_configuration' }
    ]}
>
<TabItem value="update_tiering_configuration">

This request will send changes to your specified tiering configuration. TieringConfigurationName cannot be updated after it is created. ResourceSelection can contain: Resources TieringDownSettingsInDays ResourceType

```sql
UPDATE aws.backup.tiering_configurations
SET 
TieringConfiguration = '{{ TieringConfiguration }}'
WHERE 
tiering_configuration_name = '{{ tiering_configuration_name }}' --required
AND region = '{{ region }}' --required
AND TieringConfiguration = '{{ TieringConfiguration }}' --required
RETURNING
CreationTime,
LastUpdatedTime,
TieringConfigurationArn,
TieringConfigurationName;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_tiering_configuration"
    values={[
        { label: 'delete_tiering_configuration', value: 'delete_tiering_configuration' }
    ]}
>
<TabItem value="delete_tiering_configuration">

Deletes the tiering configuration specified by a tiering configuration name.

```sql
DELETE FROM aws.backup.tiering_configurations
WHERE tiering_configuration_name = '{{ tiering_configuration_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
