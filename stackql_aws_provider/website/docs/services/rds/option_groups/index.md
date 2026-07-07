--- 
title: option_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - option_groups
  - rds
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

Creates, updates, deletes, gets or lists an <code>option_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="option_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.option_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_option_groups"
    values={[
        { label: 'describe_option_groups', value: 'describe_option_groups' }
    ]}
>
<TabItem value="describe_option_groups">

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
    <td><CopyableCode code="AllowsVpcAndNonVpcInstanceMemberships" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this option group can be applied to both VPC and non-VPC instances. The value true indicates the option group can be applied to both VPC and non-VPC instances.</td>
</tr>
<tr>
    <td><CopyableCode code="CopyTimestamp" /></td>
    <td><code>string</code></td>
    <td>Indicates when the option group was copied.</td>
</tr>
<tr>
    <td><CopyableCode code="EngineName" /></td>
    <td><code>string</code></td>
    <td>Indicates the name of the engine that this option group can be applied to.</td>
</tr>
<tr>
    <td><CopyableCode code="MajorEngineVersion" /></td>
    <td><code>string</code></td>
    <td>Indicates the major engine version associated with this option group.</td>
</tr>
<tr>
    <td><CopyableCode code="OptionGroupArn" /></td>
    <td><code>string</code></td>
    <td>Specifies the Amazon Resource Name (ARN) for the option group.</td>
</tr>
<tr>
    <td><CopyableCode code="OptionGroupDescription" /></td>
    <td><code>string</code></td>
    <td>Provides a description of the option group.</td>
</tr>
<tr>
    <td><CopyableCode code="OptionGroupName" /></td>
    <td><code>string</code></td>
    <td>Specifies the name of the option group.</td>
</tr>
<tr>
    <td><CopyableCode code="Options" /></td>
    <td><code>string</code></td>
    <td>Indicates what options are available in the option group.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceAccountId" /></td>
    <td><code>string</code></td>
    <td>Specifies the Amazon Web Services account ID for the option group from which this option group is copied.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceOptionGroup" /></td>
    <td><code>string</code></td>
    <td>Specifies the name of the option group from which this option group is copied.</td>
</tr>
<tr>
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>If AllowsVpcAndNonVpcInstanceMemberships is false, this field is blank. If AllowsVpcAndNonVpcInstanceMemberships is true and this field is blank, then this option group can be applied to both VPC and non-VPC instances. If this field contains a value, then this option group can only be applied to instances that are in the VPC indicated by this field.</td>
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
    <td><a href="#describe_option_groups"><CopyableCode code="describe_option_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-OptionGroupName"><code>OptionGroupName</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-EngineName"><code>EngineName</code></a>, <a href="#parameter-MajorEngineVersion"><code>MajorEngineVersion</code></a></td>
    <td>Describes the available option groups.</td>
</tr>
<tr>
    <td><a href="#create_option_group"><CopyableCode code="create_option_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-OptionGroupName"><code>OptionGroupName</code></a>, <a href="#parameter-EngineName"><code>EngineName</code></a>, <a href="#parameter-MajorEngineVersion"><code>MajorEngineVersion</code></a>, <a href="#parameter-OptionGroupDescription"><code>OptionGroupDescription</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates a new option group. You can create up to 20 option groups. This command doesn't apply to RDS Custom.</td>
</tr>
<tr>
    <td><a href="#modify_option_group"><CopyableCode code="modify_option_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-OptionGroupName"><code>OptionGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-OptionsToInclude"><code>OptionsToInclude</code></a>, <a href="#parameter-OptionsToRemove"><code>OptionsToRemove</code></a>, <a href="#parameter-ApplyImmediately"><code>ApplyImmediately</code></a></td>
    <td>Modifies an existing option group.</td>
</tr>
<tr>
    <td><a href="#delete_option_group"><CopyableCode code="delete_option_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-OptionGroupName"><code>OptionGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing option group.</td>
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
<tr id="parameter-EngineName">
    <td><CopyableCode code="EngineName" /></td>
    <td><code>string</code></td>
    <td>The name of the engine to associate this option group with. Valid Values: db2-ae db2-se mariadb mysql oracle-ee oracle-ee-cdb oracle-se2 oracle-se2-cdb postgres sqlserver-ee sqlserver-se sqlserver-ex sqlserver-web</td>
</tr>
<tr id="parameter-MajorEngineVersion">
    <td><CopyableCode code="MajorEngineVersion" /></td>
    <td><code>string</code></td>
    <td>Specifies the major version of the engine that this option group should be associated with.</td>
</tr>
<tr id="parameter-OptionGroupDescription">
    <td><CopyableCode code="OptionGroupDescription" /></td>
    <td><code>string</code></td>
    <td>The description of the option group.</td>
</tr>
<tr id="parameter-OptionGroupName">
    <td><CopyableCode code="OptionGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the option group to be deleted. You can't delete default option groups.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ApplyImmediately">
    <td><CopyableCode code="ApplyImmediately" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to apply the change immediately or during the next maintenance window for each instance associated with the option group.</td>
</tr>
<tr id="parameter-EngineName">
    <td><CopyableCode code="EngineName" /></td>
    <td><code>string</code></td>
    <td>A filter to only include option groups associated with this database engine. Valid Values: db2-ae db2-se mariadb mysql oracle-ee oracle-ee-cdb oracle-se2 oracle-se2-cdb postgres sqlserver-ee sqlserver-se sqlserver-ex sqlserver-web</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>This parameter isn't currently supported.</td>
</tr>
<tr id="parameter-MajorEngineVersion">
    <td><CopyableCode code="MajorEngineVersion" /></td>
    <td><code>string</code></td>
    <td>Filters the list of option groups to only include groups associated with a specific database engine version. If specified, then EngineName must also be specified.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous DescribeOptionGroups request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-OptionGroupName">
    <td><CopyableCode code="OptionGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the option group to describe. Can't be supplied together with EngineName or MajorEngineVersion.</td>
</tr>
<tr id="parameter-OptionsToInclude">
    <td><CopyableCode code="OptionsToInclude" /></td>
    <td><code>array</code></td>
    <td>Options in this list are added to the option group or, if already present, the specified configuration is used to update the existing configuration.</td>
</tr>
<tr id="parameter-OptionsToRemove">
    <td><CopyableCode code="OptionsToRemove" /></td>
    <td><code>array</code></td>
    <td>Options in this list are removed from the option group.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>Tags to assign to the option group.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_option_groups"
    values={[
        { label: 'describe_option_groups', value: 'describe_option_groups' }
    ]}
>
<TabItem value="describe_option_groups">

Describes the available option groups.

```sql
SELECT
AllowsVpcAndNonVpcInstanceMemberships,
CopyTimestamp,
EngineName,
MajorEngineVersion,
OptionGroupArn,
OptionGroupDescription,
OptionGroupName,
Options,
SourceAccountId,
SourceOptionGroup,
VpcId
FROM aws.rds.option_groups
WHERE region = '{{ region }}' -- required
AND OptionGroupName = '{{ OptionGroupName }}'
AND Filters = '{{ Filters }}'
AND Marker = '{{ Marker }}'
AND MaxRecords = '{{ MaxRecords }}'
AND EngineName = '{{ EngineName }}'
AND MajorEngineVersion = '{{ MajorEngineVersion }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_option_group"
    values={[
        { label: 'create_option_group', value: 'create_option_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_option_group">

Creates a new option group. You can create up to 20 option groups. This command doesn't apply to RDS Custom.

```sql
INSERT INTO aws.rds.option_groups (
OptionGroupName,
EngineName,
MajorEngineVersion,
OptionGroupDescription,
region,
Tags
)
SELECT 
'{{ OptionGroupName }}',
'{{ EngineName }}',
'{{ MajorEngineVersion }}',
'{{ OptionGroupDescription }}',
'{{ region }}',
'{{ Tags }}'
RETURNING
AllowsVpcAndNonVpcInstanceMemberships,
CopyTimestamp,
EngineName,
MajorEngineVersion,
OptionGroupArn,
OptionGroupDescription,
OptionGroupName,
Options,
SourceAccountId,
SourceOptionGroup,
VpcId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: option_groups
  props:
    - name: OptionGroupName
      value: "{{ OptionGroupName }}"
      description: Required parameter for the option_groups resource.
    - name: EngineName
      value: "{{ EngineName }}"
      description: Required parameter for the option_groups resource.
    - name: MajorEngineVersion
      value: "{{ MajorEngineVersion }}"
      description: Required parameter for the option_groups resource.
    - name: OptionGroupDescription
      value: "{{ OptionGroupDescription }}"
      description: Required parameter for the option_groups resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the option_groups resource.
    - name: Tags
      value: "{{ Tags }}"
      description: Tags to assign to the option group.
      description: Tags to assign to the option group.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_option_group"
    values={[
        { label: 'modify_option_group', value: 'modify_option_group' }
    ]}
>
<TabItem value="modify_option_group">

Modifies an existing option group.

```sql
UPDATE aws.rds.option_groups
SET 
-- No updatable properties
WHERE 
OptionGroupName = '{{ OptionGroupName }}' --required
AND region = '{{ region }}' --required
AND OptionsToInclude = '{{ OptionsToInclude}}'
AND OptionsToRemove = '{{ OptionsToRemove}}'
AND ApplyImmediately = {{ ApplyImmediately}}
RETURNING
AllowsVpcAndNonVpcInstanceMemberships,
CopyTimestamp,
EngineName,
MajorEngineVersion,
OptionGroupArn,
OptionGroupDescription,
OptionGroupName,
Options,
SourceAccountId,
SourceOptionGroup,
VpcId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_option_group"
    values={[
        { label: 'delete_option_group', value: 'delete_option_group' }
    ]}
>
<TabItem value="delete_option_group">

Deletes an existing option group.

```sql
DELETE FROM aws.rds.option_groups
WHERE OptionGroupName = '{{ OptionGroupName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
