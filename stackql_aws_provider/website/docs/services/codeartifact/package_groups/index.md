--- 
title: package_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - package_groups
  - codeartifact
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

Creates, updates, deletes, gets or lists a <code>package_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="package_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeartifact.package_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_package_group"
    values={[
        { label: 'describe_package_group', value: 'describe_package_group' },
        { label: 'list_package_groups', value: 'list_package_groups' }
    ]}
>
<TabItem value="describe_package_group">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the package group. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="contact_info" /></td>
    <td><code>string</code></td>
    <td>The contact information of the package group. (pattern: &lt;code&gt;\P&#123;C&#125;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that represents the date and time the package group was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the package group. (pattern: &lt;code&gt;\P&#123;C&#125;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The name of the domain that contains the package group. (pattern: &lt;code&gt;&#91;a-z&#93;&#91;a-z0-9\-&#93;&#123;0,48&#125;&#91;a-z0-9&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domain_owner" /></td>
    <td><code>string</code></td>
    <td>The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="origin_configuration" /></td>
    <td><code>object</code></td>
    <td>The package group origin configuration that determines how package versions can enter repositories.</td>
</tr>
<tr>
    <td><CopyableCode code="parent" /></td>
    <td><code>object</code></td>
    <td>The direct parent package group of the package group.</td>
</tr>
<tr>
    <td><CopyableCode code="pattern_" /></td>
    <td><code>string</code></td>
    <td>The pattern of the package group. The pattern determines which packages are associated with the package group. (pattern: &lt;code&gt;&#91;^\p&#123;C&#125;\p&#123;IsWhitespace&#125;&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_package_groups">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the package group. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="contact_info" /></td>
    <td><code>string</code></td>
    <td>The contact information of the package group. (pattern: &lt;code&gt;\P&#123;C&#125;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that represents the date and time the repository was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the package group. (pattern: &lt;code&gt;\P&#123;C&#125;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The domain that contains the package group. (pattern: &lt;code&gt;&#91;a-z&#93;&#91;a-z0-9\-&#93;&#123;0,48&#125;&#91;a-z0-9&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domain_owner" /></td>
    <td><code>string</code></td>
    <td>The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="origin_configuration" /></td>
    <td><code>object</code></td>
    <td>Details about the package origin configuration of a package group.</td>
</tr>
<tr>
    <td><CopyableCode code="parent" /></td>
    <td><code>object</code></td>
    <td>The direct parent package group of the package group.</td>
</tr>
<tr>
    <td><CopyableCode code="pattern_" /></td>
    <td><code>string</code></td>
    <td>The pattern of the package group. The pattern determines which packages are associated with the package group. (pattern: &lt;code&gt;&#91;^\p&#123;C&#125;\p&#123;IsWhitespace&#125;&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_package_group"><CopyableCode code="describe_package_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-package-group"><code>package-group</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domain-owner"><code>domain-owner</code></a></td>
    <td>Returns a PackageGroupDescription object that contains information about the requested package group.</td>
</tr>
<tr>
    <td><a href="#list_package_groups"><CopyableCode code="list_package_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domain-owner"><code>domain-owner</code></a>, <a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-prefix"><code>prefix</code></a></td>
    <td>Returns a list of package groups in the requested domain.</td>
</tr>
<tr>
    <td><a href="#create_package_group"><CopyableCode code="create_package_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-packageGroup"><code>packageGroup</code></a></td>
    <td><a href="#parameter-domain-owner"><code>domain-owner</code></a></td>
    <td>Creates a package group. For more information about creating package groups, including example CLI commands, see Create a package group in the CodeArtifact User Guide.</td>
</tr>
<tr>
    <td><a href="#update_package_group"><CopyableCode code="update_package_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-packageGroup"><code>packageGroup</code></a></td>
    <td><a href="#parameter-domain-owner"><code>domain-owner</code></a></td>
    <td>Updates a package group. This API cannot be used to update a package group's origin configuration or pattern. To update a package group's origin configuration, use UpdatePackageGroupOriginConfiguration.</td>
</tr>
<tr>
    <td><a href="#update_package_group_origin_configuration"><CopyableCode code="update_package_group_origin_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-package-group"><code>package-group</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domain-owner"><code>domain-owner</code></a></td>
    <td>Updates the package origin configuration for a package group. The package origin configuration determines how new versions of a package can be added to a repository. You can allow or block direct publishing of new package versions, or ingestion and retaining of new package versions from an external connection or upstream source. For more information about package group origin controls and configuration, see Package group origin controls in the CodeArtifact User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_package_group"><CopyableCode code="delete_package_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-package-group"><code>package-group</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domain-owner"><code>domain-owner</code></a></td>
    <td>Deletes a package group. Deleting a package group does not delete packages or package versions associated with the package group. When a package group is deleted, the direct child package groups will become children of the package group's direct parent package group. Therefore, if any of the child groups are inheriting any settings from the parent, those settings could change.</td>
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
<tr id="parameter-domain">
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The domain that contains the package group to be deleted.</td>
</tr>
<tr id="parameter-package-group">
    <td><CopyableCode code="package-group" /></td>
    <td><code>string</code></td>
    <td>The pattern of the package group to be deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-domain-owner">
    <td><CopyableCode code="domain-owner" /></td>
    <td><code>string</code></td>
    <td>The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
<tr id="parameter-prefix">
    <td><CopyableCode code="prefix" /></td>
    <td><code>string</code></td>
    <td>A prefix for which to search package groups. When included, ListPackageGroups will return only package groups with patterns that match the prefix.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_package_group"
    values={[
        { label: 'describe_package_group', value: 'describe_package_group' },
        { label: 'list_package_groups', value: 'list_package_groups' }
    ]}
>
<TabItem value="describe_package_group">

Returns a PackageGroupDescription object that contains information about the requested package group.

```sql
SELECT
arn,
contact_info,
created_time,
description,
domain_name,
domain_owner,
origin_configuration,
parent,
pattern_
FROM aws.codeartifact.package_groups
WHERE domain = '{{ domain }}' -- required
AND `package-group` = '{{ package-group }}' -- required
AND region = '{{ region }}' -- required
AND `domain-owner` = '{{ domain-owner }}'
;
```
</TabItem>
<TabItem value="list_package_groups">

Returns a list of package groups in the requested domain.

```sql
SELECT
arn,
contact_info,
created_time,
description,
domain_name,
domain_owner,
origin_configuration,
parent,
pattern_
FROM aws.codeartifact.package_groups
WHERE domain = '{{ domain }}' -- required
AND region = '{{ region }}' -- required
AND `domain-owner` = '{{ domain-owner }}'
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
AND prefix = '{{ prefix }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_package_group"
    values={[
        { label: 'create_package_group', value: 'create_package_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_package_group">

Creates a package group. For more information about creating package groups, including example CLI commands, see Create a package group in the CodeArtifact User Guide.

```sql
INSERT INTO aws.codeartifact.package_groups (
packageGroup,
contactInfo,
description,
tags,
domain,
region,
`domain-owner`
)
SELECT 
'{{ packageGroup }}' /* required */,
'{{ contactInfo }}',
'{{ description }}',
'{{ tags }}',
'{{ domain }}',
'{{ region }}',
'{{ domain-owner }}'
RETURNING
package_group
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: package_groups
  props:
    - name: domain
      value: "{{ domain }}"
      description: Required parameter for the package_groups resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the package_groups resource.
    - name: packageGroup
      value: "{{ packageGroup }}"
    - name: contactInfo
      value: "{{ contactInfo }}"
    - name: description
      value: "{{ description }}"
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: domain-owner
      value: "{{ domain-owner }}"
      description: The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
      description: The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_package_group"
    values={[
        { label: 'update_package_group', value: 'update_package_group' },
        { label: 'update_package_group_origin_configuration', value: 'update_package_group_origin_configuration' }
    ]}
>
<TabItem value="update_package_group">

Updates a package group. This API cannot be used to update a package group's origin configuration or pattern. To update a package group's origin configuration, use UpdatePackageGroupOriginConfiguration.

```sql
UPDATE aws.codeartifact.package_groups
SET 
packageGroup = '{{ packageGroup }}',
contactInfo = '{{ contactInfo }}',
description = '{{ description }}'
WHERE 
domain = '{{ domain }}' --required
AND region = '{{ region }}' --required
AND packageGroup = '{{ packageGroup }}' --required
AND `domain-owner` = '{{ domain-owner}}'
RETURNING
package_group;
```
</TabItem>
<TabItem value="update_package_group_origin_configuration">

Updates the package origin configuration for a package group. The package origin configuration determines how new versions of a package can be added to a repository. You can allow or block direct publishing of new package versions, or ingestion and retaining of new package versions from an external connection or upstream source. For more information about package group origin controls and configuration, see Package group origin controls in the CodeArtifact User Guide.

```sql
UPDATE aws.codeartifact.package_groups
SET 
restrictions = '{{ restrictions }}',
addAllowedRepositories = '{{ addAllowedRepositories }}',
removeAllowedRepositories = '{{ removeAllowedRepositories }}'
WHERE 
domain = '{{ domain }}' --required
AND `package-group` = '{{ package-group }}' --required
AND region = '{{ region }}' --required
AND `domain-owner` = '{{ domain-owner}}'
RETURNING
allowed_repository_updates,
package_group;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_package_group"
    values={[
        { label: 'delete_package_group', value: 'delete_package_group' }
    ]}
>
<TabItem value="delete_package_group">

Deletes a package group. Deleting a package group does not delete packages or package versions associated with the package group. When a package group is deleted, the direct child package groups will become children of the package group's direct parent package group. Therefore, if any of the child groups are inheriting any settings from the parent, those settings could change.

```sql
DELETE FROM aws.codeartifact.package_groups
WHERE domain = '{{ domain }}' --required
AND `package-group` = '{{ package-group }}' --required
AND region = '{{ region }}' --required
AND `domain-owner` = '{{ domain-owner }}'
;
```
</TabItem>
</Tabs>
