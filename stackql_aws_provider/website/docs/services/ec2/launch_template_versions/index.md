--- 
title: launch_template_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - launch_template_versions
  - ec2
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

Creates, updates, deletes, gets or lists a <code>launch_template_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="launch_template_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.launch_template_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_launch_template_versions"
    values={[
        { label: 'describe_launch_template_versions', value: 'describe_launch_template_versions' }
    ]}
>
<TabItem value="describe_launch_template_versions">

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
    <td><CopyableCode code="create_time" /></td>
    <td><code>string</code></td>
    <td>The time the version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The principal that created the version.</td>
</tr>
<tr>
    <td><CopyableCode code="default_version" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the version is the default version.</td>
</tr>
<tr>
    <td><CopyableCode code="launch_template_data" /></td>
    <td><code>string</code></td>
    <td>Information about the launch template.</td>
</tr>
<tr>
    <td><CopyableCode code="launch_template_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the launch template.</td>
</tr>
<tr>
    <td><CopyableCode code="launch_template_name" /></td>
    <td><code>string</code></td>
    <td>The name of the launch template.</td>
</tr>
<tr>
    <td><CopyableCode code="operator" /></td>
    <td><code>string</code></td>
    <td>The entity that manages the launch template.</td>
</tr>
<tr>
    <td><CopyableCode code="version_description" /></td>
    <td><code>string</code></td>
    <td>The description for the version.</td>
</tr>
<tr>
    <td><CopyableCode code="version_number" /></td>
    <td><code>integer</code></td>
    <td>The version number.</td>
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
    <td><a href="#describe_launch_template_versions"><CopyableCode code="describe_launch_template_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-LaunchTemplateId"><code>LaunchTemplateId</code></a>, <a href="#parameter-LaunchTemplateName"><code>LaunchTemplateName</code></a>, <a href="#parameter-LaunchTemplateVersion"><code>LaunchTemplateVersion</code></a>, <a href="#parameter-MinVersion"><code>MinVersion</code></a>, <a href="#parameter-MaxVersion"><code>MaxVersion</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-ResolveAlias"><code>ResolveAlias</code></a>, <a href="#parameter-IncludeManagedResources"><code>IncludeManagedResources</code></a></td>
    <td>Describes one or more versions of a specified launch template. You can describe all versions, individual versions, or a range of versions. You can also describe all the latest versions or all the default versions of all the launch templates in your account.</td>
</tr>
<tr>
    <td><a href="#create_launch_template_version"><CopyableCode code="create_launch_template_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-LaunchTemplateData"><code>LaunchTemplateData</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-LaunchTemplateId"><code>LaunchTemplateId</code></a>, <a href="#parameter-LaunchTemplateName"><code>LaunchTemplateName</code></a>, <a href="#parameter-SourceVersion"><code>SourceVersion</code></a>, <a href="#parameter-VersionDescription"><code>VersionDescription</code></a>, <a href="#parameter-ResolveAlias"><code>ResolveAlias</code></a></td>
    <td>Creates a new version of a launch template. You must specify an existing launch template, either by name or ID. You can determine whether the new version inherits parameters from a source version, and add or overwrite parameters as needed. Launch template versions are numbered in the order in which they are created. You can't specify, change, or replace the numbering of launch template versions. Launch templates are immutable; after you create a launch template, you can't modify it. Instead, you can create a new version of the launch template that includes the changes that you require. For more information, see Modify a launch template (manage launch template versions) in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_launch_template_versions"><CopyableCode code="delete_launch_template_versions" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-LaunchTemplateVersion"><code>LaunchTemplateVersion</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-LaunchTemplateId"><code>LaunchTemplateId</code></a>, <a href="#parameter-LaunchTemplateName"><code>LaunchTemplateName</code></a></td>
    <td>Deletes one or more versions of a launch template. You can't delete the default version of a launch template; you must first assign a different version as the default. If the default version is the only version for the launch template, you must delete the entire launch template using DeleteLaunchTemplate. You can delete up to 200 launch template versions in a single request. To delete more than 200 versions in a single request, use DeleteLaunchTemplate, which deletes the launch template and all of its versions. For more information, see Delete a launch template version in the Amazon EC2 User Guide.</td>
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
<tr id="parameter-LaunchTemplateData">
    <td><CopyableCode code="LaunchTemplateData" /></td>
    <td><code>object</code></td>
    <td>The information for the launch template.</td>
</tr>
<tr id="parameter-LaunchTemplateVersion">
    <td><CopyableCode code="LaunchTemplateVersion" /></td>
    <td><code>array</code></td>
    <td>The version numbers of one or more launch template versions to delete. You can specify up to 200 launch template version numbers.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If a client token isn't specified, a randomly generated token is used in the request to ensure idempotency. For more information, see Ensuring idempotency. Constraint: Maximum 128 ASCII characters.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. create-time - The time the launch template version was created. ebs-optimized - A boolean that indicates whether the instance is optimized for Amazon EBS I/O. http-endpoint - Indicates whether the HTTP metadata endpoint on your instances is enabled (enabled | disabled). http-protocol-ipv4 - Indicates whether the IPv4 endpoint for the instance metadata service is enabled (enabled | disabled). host-resource-group-arn - The ARN of the host resource group in which to launch the instances. http-tokens - The state of token usage for your instance metadata requests (optional | required). iam-instance-profile - The ARN of the IAM instance profile. image-id - The ID of the AMI. instance-type - The instance type. is-default-version - A boolean that indicates whether the launch template version is the default version. kernel-id - The kernel ID. license-configuration-arn - The ARN of the license configuration. network-card-index - The index of the network card. ram-disk-id - The RAM disk ID.</td>
</tr>
<tr id="parameter-IncludeManagedResources">
    <td><CopyableCode code="IncludeManagedResources" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether to include managed resources in the output. If this parameter is set to true, the output includes resources that are managed by Amazon Web Services services, even if managed resource visibility is set to hidden.</td>
</tr>
<tr id="parameter-LaunchTemplateId">
    <td><CopyableCode code="LaunchTemplateId" /></td>
    <td><code>string</code></td>
    <td>The ID of the launch template. You must specify either the launch template ID or the launch template name, but not both.</td>
</tr>
<tr id="parameter-LaunchTemplateName">
    <td><CopyableCode code="LaunchTemplateName" /></td>
    <td><code>string</code></td>
    <td>The name of the launch template. You must specify either the launch template ID or the launch template name, but not both.</td>
</tr>
<tr id="parameter-LaunchTemplateVersion">
    <td><CopyableCode code="LaunchTemplateVersion" /></td>
    <td><code>array</code></td>
    <td>One or more versions of the launch template. Valid values depend on whether you are describing a specified launch template (by ID or name) or all launch templates in your account. To describe one or more versions of a specified launch template, valid values are $Latest, $Default, and numbers. To describe all launch templates in your account that are defined as the latest version, the valid value is $Latest. To describe all launch templates in your account that are defined as the default version, the valid value is $Default. You can specify $Latest and $Default in the same request. You cannot specify numbers.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned NextToken value. This value can be between 1 and 200.</td>
</tr>
<tr id="parameter-MaxVersion">
    <td><CopyableCode code="MaxVersion" /></td>
    <td><code>string</code></td>
    <td>The version number up to which to describe launch template versions.</td>
</tr>
<tr id="parameter-MinVersion">
    <td><CopyableCode code="MinVersion" /></td>
    <td><code>string</code></td>
    <td>The version number after which to describe launch template versions.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to request the next page of results.</td>
</tr>
<tr id="parameter-ResolveAlias">
    <td><CopyableCode code="ResolveAlias" /></td>
    <td><code>boolean</code></td>
    <td>If true, and if a Systems Manager parameter is specified for ImageId, the AMI ID is displayed in the response for imageID. For more information, see Use a Systems Manager parameter instead of an AMI ID in the Amazon EC2 User Guide. Default: false</td>
</tr>
<tr id="parameter-SourceVersion">
    <td><CopyableCode code="SourceVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the launch template on which to base the new version. Snapshots applied to the block device mapping are ignored when creating a new version unless they are explicitly included. If you specify this parameter, the new version inherits the launch parameters from the source version. If you specify additional launch parameters for the new version, they overwrite any corresponding launch parameters inherited from the source version. If you omit this parameter, the new version contains only the launch parameters that you specify for the new version.</td>
</tr>
<tr id="parameter-VersionDescription">
    <td><CopyableCode code="VersionDescription" /></td>
    <td><code>string</code></td>
    <td>A description for the version of the launch template.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_launch_template_versions"
    values={[
        { label: 'describe_launch_template_versions', value: 'describe_launch_template_versions' }
    ]}
>
<TabItem value="describe_launch_template_versions">

Describes one or more versions of a specified launch template. You can describe all versions, individual versions, or a range of versions. You can also describe all the latest versions or all the default versions of all the launch templates in your account.

```sql
SELECT
create_time,
created_by,
default_version,
launch_template_data,
launch_template_id,
launch_template_name,
operator,
version_description,
version_number
FROM aws.ec2.launch_template_versions
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND LaunchTemplateId = '{{ LaunchTemplateId }}'
AND LaunchTemplateName = '{{ LaunchTemplateName }}'
AND LaunchTemplateVersion = '{{ LaunchTemplateVersion }}'
AND MinVersion = '{{ MinVersion }}'
AND MaxVersion = '{{ MaxVersion }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND Filter = '{{ Filter }}'
AND ResolveAlias = '{{ ResolveAlias }}'
AND IncludeManagedResources = '{{ IncludeManagedResources }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_launch_template_version"
    values={[
        { label: 'create_launch_template_version', value: 'create_launch_template_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_launch_template_version">

Creates a new version of a launch template. You must specify an existing launch template, either by name or ID. You can determine whether the new version inherits parameters from a source version, and add or overwrite parameters as needed. Launch template versions are numbered in the order in which they are created. You can't specify, change, or replace the numbering of launch template versions. Launch templates are immutable; after you create a launch template, you can't modify it. Instead, you can create a new version of the launch template that includes the changes that you require. For more information, see Modify a launch template (manage launch template versions) in the Amazon EC2 User Guide.

```sql
INSERT INTO aws.ec2.launch_template_versions (
LaunchTemplateData,
region,
DryRun,
ClientToken,
LaunchTemplateId,
LaunchTemplateName,
SourceVersion,
VersionDescription,
ResolveAlias
)
SELECT 
'{{ LaunchTemplateData }}',
'{{ region }}',
'{{ DryRun }}',
'{{ ClientToken }}',
'{{ LaunchTemplateId }}',
'{{ LaunchTemplateName }}',
'{{ SourceVersion }}',
'{{ VersionDescription }}',
'{{ ResolveAlias }}'
RETURNING
create_time,
created_by,
default_version,
launch_template_data,
launch_template_id,
launch_template_name,
operator,
version_description,
version_number
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: launch_template_versions
  props:
    - name: LaunchTemplateData
      value: "{{ LaunchTemplateData }}"
      description: Required parameter for the launch_template_versions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the launch_template_versions resource.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If a client token isn't specified, a randomly generated token is used in the request to ensure idempotency. For more information, see Ensuring idempotency. Constraint: Maximum 128 ASCII characters.
      description: Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If a client token isn't specified, a randomly generated token is used in the request to ensure idempotency. For more information, see Ensuring idempotency. Constraint: Maximum 128 ASCII characters.
    - name: LaunchTemplateId
      value: "{{ LaunchTemplateId }}"
      description: The ID of the launch template. You must specify either the launch template ID or the launch template name, but not both.
      description: The ID of the launch template. You must specify either the launch template ID or the launch template name, but not both.
    - name: LaunchTemplateName
      value: "{{ LaunchTemplateName }}"
      description: The name of the launch template. You must specify either the launch template ID or the launch template name, but not both.
      description: The name of the launch template. You must specify either the launch template ID or the launch template name, but not both.
    - name: SourceVersion
      value: "{{ SourceVersion }}"
      description: The version of the launch template on which to base the new version. Snapshots applied to the block device mapping are ignored when creating a new version unless they are explicitly included. If you specify this parameter, the new version inherits the launch parameters from the source version. If you specify additional launch parameters for the new version, they overwrite any corresponding launch parameters inherited from the source version. If you omit this parameter, the new version contains only the launch parameters that you specify for the new version.
      description: The version of the launch template on which to base the new version. Snapshots applied to the block device mapping are ignored when creating a new version unless they are explicitly included. If you specify this parameter, the new version inherits the launch parameters from the source version. If you specify additional launch parameters for the new version, they overwrite any corresponding launch parameters inherited from the source version. If you omit this parameter, the new version contains only the launch parameters that you specify for the new version.
    - name: VersionDescription
      value: "{{ VersionDescription }}"
      description: A description for the version of the launch template.
      description: A description for the version of the launch template.
    - name: ResolveAlias
      value: {{ ResolveAlias }}
      description: If true, and if a Systems Manager parameter is specified for ImageId, the AMI ID is displayed in the response for imageID. For more information, see Use a Systems Manager parameter instead of an AMI ID in the Amazon EC2 User Guide. Default: false
      description: If true, and if a Systems Manager parameter is specified for ImageId, the AMI ID is displayed in the response for imageID. For more information, see Use a Systems Manager parameter instead of an AMI ID in the Amazon EC2 User Guide. Default: false
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_launch_template_versions"
    values={[
        { label: 'delete_launch_template_versions', value: 'delete_launch_template_versions' }
    ]}
>
<TabItem value="delete_launch_template_versions">

Deletes one or more versions of a launch template. You can't delete the default version of a launch template; you must first assign a different version as the default. If the default version is the only version for the launch template, you must delete the entire launch template using DeleteLaunchTemplate. You can delete up to 200 launch template versions in a single request. To delete more than 200 versions in a single request, use DeleteLaunchTemplate, which deletes the launch template and all of its versions. For more information, see Delete a launch template version in the Amazon EC2 User Guide.

```sql
DELETE FROM aws.ec2.launch_template_versions
WHERE LaunchTemplateVersion = '{{ LaunchTemplateVersion }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
AND LaunchTemplateId = '{{ LaunchTemplateId }}'
AND LaunchTemplateName = '{{ LaunchTemplateName }}'
;
```
</TabItem>
</Tabs>
