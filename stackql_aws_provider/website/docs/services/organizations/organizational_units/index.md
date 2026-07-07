--- 
title: organizational_units
hide_title: false
hide_table_of_contents: false
keywords:
  - organizational_units
  - organizations
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

Creates, updates, deletes, gets or lists an <code>organizational_units</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="organizational_units" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.organizations.organizational_units" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_organizational_unit"
    values={[
        { label: 'describe_organizational_unit', value: 'describe_organizational_unit' }
    ]}
>
<TabItem value="describe_organizational_unit">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of this OU. For more information about ARNs in Organizations, see ARN Formats Supported by Organizations in the Amazon Web Services Service Authorization Reference. (pattern: &lt;code&gt;^arn:aws:organizations::\d&#123;12&#125;:ou\/o-&#91;a-z0-9&#93;&#123;10,32&#125;\/ou-&#91;0-9a-z&#93;&#123;4,32&#125;-&#91;0-9a-z&#93;&#123;8,32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier (ID) associated with this OU. The ID is unique to the organization only. The regex pattern for an organizational unit ID string requires "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that contains the OU). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits. (pattern: &lt;code&gt;^ou-&#91;0-9a-z&#93;&#123;4,32&#125;-&#91;a-z0-9&#93;&#123;8,32&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The friendly name of this OU. The regex pattern that is used to validate this parameter is a string of any of the characters in the ASCII character range. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Path" /></td>
    <td><code>string</code></td>
    <td>The path in the organization where this OU exists. (pattern: &lt;code&gt;^(o-&#91;a-z0-9&#93;&#123;10,32&#125;\/r-&#91;0-9a-z&#93;&#123;4,32&#125;(\/ou\-&#91;0-9a-z&#93;&#123;4,32&#125;-&#91;a-z0-9&#93;&#123;8,32&#125;)*(\/\d&#123;12&#125;)*)\/&lt;/code&gt;)</td>
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
    <td><a href="#describe_organizational_unit"><CopyableCode code="describe_organizational_unit" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about an organizational unit (OU). You can only call this operation from the management account or a member account that is a delegated administrator.</td>
</tr>
<tr>
    <td><a href="#create_organizational_unit"><CopyableCode code="create_organizational_unit" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ParentId"><code>ParentId</code></a>, <a href="#parameter-Name"><code>Name</code></a></td>
    <td></td>
    <td>Creates an organizational unit (OU) within a root or parent OU. An OU is a container for accounts that enables you to organize your accounts to apply policies according to your business requirements. The number of levels deep that you can nest OUs is dependent upon the policy types enabled for that root. For service control policies, the limit is five. For more information about OUs, see Managing organizational units (OUs) in the Organizations User Guide. If the request includes tags, then the requester must have the organizations:TagResource permission. You can only call this operation from the management account.</td>
</tr>
<tr>
    <td><a href="#update_organizational_unit"><CopyableCode code="update_organizational_unit" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OrganizationalUnitId"><code>OrganizationalUnitId</code></a></td>
    <td></td>
    <td>Renames the specified organizational unit (OU). The ID and ARN don't change. The child OUs and accounts remain in place, and any attached policies of the OU remain attached. You can only call this operation from the management account.</td>
</tr>
<tr>
    <td><a href="#delete_organizational_unit"><CopyableCode code="delete_organizational_unit" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an organizational unit (OU) from a root or another OU. You must first remove all accounts and child OUs from the OU that you want to delete. You can only call this operation from the management account.</td>
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
    defaultValue="describe_organizational_unit"
    values={[
        { label: 'describe_organizational_unit', value: 'describe_organizational_unit' }
    ]}
>
<TabItem value="describe_organizational_unit">

Retrieves information about an organizational unit (OU). You can only call this operation from the management account or a member account that is a delegated administrator.

```sql
SELECT
Arn,
Id,
Name,
Path
FROM aws.organizations.organizational_units
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_organizational_unit"
    values={[
        { label: 'create_organizational_unit', value: 'create_organizational_unit' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_organizational_unit">

Creates an organizational unit (OU) within a root or parent OU. An OU is a container for accounts that enables you to organize your accounts to apply policies according to your business requirements. The number of levels deep that you can nest OUs is dependent upon the policy types enabled for that root. For service control policies, the limit is five. For more information about OUs, see Managing organizational units (OUs) in the Organizations User Guide. If the request includes tags, then the requester must have the organizations:TagResource permission. You can only call this operation from the management account.

```sql
INSERT INTO aws.organizations.organizational_units (
ParentId,
Name,
Tags,
region
)
SELECT 
'{{ ParentId }}' /* required */,
'{{ Name }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
OrganizationalUnit
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: organizational_units
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the organizational_units resource.
    - name: ParentId
      value: "{{ ParentId }}"
      description: |
        ID for the parent root or OU that you want to create the new OU in. The regex pattern for a parent ID string requires one of the following: Root - A string that begins with "r-" followed by from 4 to 32 lowercase letters or digits. Organizational unit (OU) - A string that begins with "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that the OU is in). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits.
    - name: Name
      value: "{{ Name }}"
      description: |
        The friendly name to assign to the new OU.
    - name: Tags
      description: |
        A list of tags that you want to attach to the newly created OU. For each tag in the list, you must specify both a tag key and a value. You can set the value to an empty string, but you can't set it to null. For more information about tagging, see Tagging Organizations resources in the Organizations User Guide. If any one of the tags is not valid or if you exceed the allowed number of tags for an OU, then the entire request fails and the OU is not created.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_organizational_unit"
    values={[
        { label: 'update_organizational_unit', value: 'update_organizational_unit' }
    ]}
>
<TabItem value="update_organizational_unit">

Renames the specified organizational unit (OU). The ID and ARN don't change. The child OUs and accounts remain in place, and any attached policies of the OU remain attached. You can only call this operation from the management account.

```sql
UPDATE aws.organizations.organizational_units
SET 
OrganizationalUnitId = '{{ OrganizationalUnitId }}',
Name = '{{ Name }}'
WHERE 
region = '{{ region }}' --required
AND OrganizationalUnitId = '{{ OrganizationalUnitId }}' --required
RETURNING
OrganizationalUnit;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_organizational_unit"
    values={[
        { label: 'delete_organizational_unit', value: 'delete_organizational_unit' }
    ]}
>
<TabItem value="delete_organizational_unit">

Deletes an organizational unit (OU) from a root or another OU. You must first remove all accounts and child OUs from the OU that you want to delete. You can only call this operation from the management account.

```sql
DELETE FROM aws.organizations.organizational_units
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
