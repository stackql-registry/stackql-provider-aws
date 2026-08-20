--- 
title: role_template_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - role_template_versions
  - iam
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

Creates, updates, deletes, gets or lists a <code>role_template_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="role_template_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.role_template_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_role_template_version"
    values={[
        { label: 'get_role_template_version', value: 'get_role_template_version' }
    ]}
>
<TabItem value="get_role_template_version">

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
    <td><CopyableCode code="assume_role_policy_document_template" /></td>
    <td><code>string</code></td>
    <td>The trust policy template that grants an entity permission to assume roles that you create from this template.</td>
</tr>
<tr>
    <td><CopyableCode code="create_timestamp" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO 8601 date-time format, when the role template version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="default_minor_version" /></td>
    <td><code>integer</code></td>
    <td>The minor version that the service uses by default when you create a role from this template without specifying a minor version.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the role template.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the role template is enabled. When a template is disabled, you cannot create roles from it.</td>
</tr>
<tr>
    <td><CopyableCode code="inline_policy_templates" /></td>
    <td><code>string</code></td>
    <td>A list of inline policy templates that the service embeds in roles that you create from this template.</td>
</tr>
<tr>
    <td><CopyableCode code="major_version" /></td>
    <td><code>integer</code></td>
    <td>The major version number of the role template.</td>
</tr>
<tr>
    <td><CopyableCode code="managed_by_type" /></td>
    <td><code>string</code></td>
    <td>Indicates that the role template is managed by an Amazon Web Services service.</td>
</tr>
<tr>
    <td><CopyableCode code="managed_by_value" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Web Services service that manages the role template.</td>
</tr>
<tr>
    <td><CopyableCode code="managed_policy_arns" /></td>
    <td><code>string</code></td>
    <td>A list of the ARNs of the managed policies that the service attaches to roles that you create from this template.</td>
</tr>
<tr>
    <td><CopyableCode code="max_session_duration" /></td>
    <td><code>integer</code></td>
    <td>The maximum session duration (in seconds) for roles that are created from this template.</td>
</tr>
<tr>
    <td><CopyableCode code="minor_version" /></td>
    <td><code>integer</code></td>
    <td>The minor version number of this role template version.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters_definition" /></td>
    <td><code>string</code></td>
    <td>A list of the parameters that are defined for this role template version. You supply values for these parameters when you create a role with AcquireRole.</td>
</tr>
<tr>
    <td><CopyableCode code="permission_boundary_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the policy that sets the permissions boundary for roles that you create from this template. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference.</td>
</tr>
<tr>
    <td><CopyableCode code="role_description_pattern" /></td>
    <td><code>string</code></td>
    <td>The pattern that is used to generate the description of a role that is created from this template.</td>
</tr>
<tr>
    <td><CopyableCode code="role_name_pattern" /></td>
    <td><code>string</code></td>
    <td>The pattern that is used to generate the name of a role that is created from this template. The pattern can include @&#123;parameter&#125; placeholders that are replaced with the values you supply in the ReplacementValues parameter of AcquireRole.</td>
</tr>
<tr>
    <td><CopyableCode code="role_path_pattern" /></td>
    <td><code>string</code></td>
    <td>The pattern that is used to generate the path of a role that is created from this template.</td>
</tr>
<tr>
    <td><CopyableCode code="role_tags_template" /></td>
    <td><code>string</code></td>
    <td>A list of tag templates that are applied to roles that are created from this template.</td>
</tr>
<tr>
    <td><CopyableCode code="template_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that identifies the role template. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference.</td>
</tr>
<tr>
    <td><CopyableCode code="template_name" /></td>
    <td><code>string</code></td>
    <td>The friendly name that identifies the role template.</td>
</tr>
<tr>
    <td><CopyableCode code="template_version_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the role template version.</td>
</tr>
<tr>
    <td><CopyableCode code="update_timestamp" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO 8601 date-time format, when the role template version was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="version_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether this specific minor version of the role template is enabled.</td>
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
    <td><a href="#get_role_template_version"><CopyableCode code="get_role_template_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-TemplateArn"><code>TemplateArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MinorVersion"><code>MinorVersion</code></a></td>
    <td>Retrieves information about a version of the specified role template. Role templates define a reusable configuration—including role name and path patterns, trust policy, inline and managed policies, permissions boundary, tags, and maximum session duration—that you use to create IAM roles with AcquireRole. If you do not specify a minor version, the service returns the template's default minor version.</td>
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
<tr id="parameter-TemplateArn">
    <td><CopyableCode code="TemplateArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the role template whose version you want to retrieve. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MinorVersion">
    <td><CopyableCode code="MinorVersion" /></td>
    <td><code>integer</code></td>
    <td>The minor version of the role template to retrieve. If you do not specify a minor version, the service returns the template's default minor version.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_role_template_version"
    values={[
        { label: 'get_role_template_version', value: 'get_role_template_version' }
    ]}
>
<TabItem value="get_role_template_version">

Retrieves information about a version of the specified role template. Role templates define a reusable configuration—including role name and path patterns, trust policy, inline and managed policies, permissions boundary, tags, and maximum session duration—that you use to create IAM roles with AcquireRole. If you do not specify a minor version, the service returns the template's default minor version.

```sql
SELECT
assume_role_policy_document_template,
create_timestamp,
default_minor_version,
description,
enabled,
inline_policy_templates,
major_version,
managed_by_type,
managed_by_value,
managed_policy_arns,
max_session_duration,
minor_version,
parameters_definition,
permission_boundary_arn,
role_description_pattern,
role_name_pattern,
role_path_pattern,
role_tags_template,
template_arn,
template_name,
template_version_id,
update_timestamp,
version_enabled
FROM aws.iam.role_template_versions
WHERE TemplateArn = '{{ TemplateArn }}' -- required
AND region = '{{ region }}' -- required
AND MinorVersion = '{{ MinorVersion }}'
;
```
</TabItem>
</Tabs>
