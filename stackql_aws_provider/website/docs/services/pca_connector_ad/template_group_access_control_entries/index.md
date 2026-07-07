--- 
title: template_group_access_control_entries
hide_title: false
hide_table_of_contents: false
keywords:
  - template_group_access_control_entries
  - pca_connector_ad
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

Creates, updates, deletes, gets or lists a <code>template_group_access_control_entries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="template_group_access_control_entries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pca_connector_ad.template_group_access_control_entries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_template_group_access_control_entry"
    values={[
        { label: 'get_template_group_access_control_entry', value: 'get_template_group_access_control_entry' },
        { label: 'list_template_group_access_control_entries', value: 'list_template_group_access_control_entries' }
    ]}
>
<TabItem value="get_template_group_access_control_entry">

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
    <td><CopyableCode code="AccessRights" /></td>
    <td><code>object</code></td>
    <td>Allow or deny permissions for an Active Directory group to enroll or autoenroll certificates for a template.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the Access Control Entry was created.</td>
</tr>
<tr>
    <td><CopyableCode code="GroupDisplayName" /></td>
    <td><code>string</code></td>
    <td>Name of the Active Directory group. This name does not need to match the group name in Active Directory. (pattern: &lt;code&gt;^&#91;\x20-\x7E&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="GroupSecurityIdentifier" /></td>
    <td><code>string</code></td>
    <td>Security identifier (SID) of the group object from Active Directory. The SID starts with "S-". (pattern: &lt;code&gt;^S-&#91;0-9&#93;-(&#91;0-9&#93;+-)&#123;1,14&#125;&#91;0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TemplateArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that was returned when you called CreateTemplate. (pattern: &lt;code&gt;^arn:&#91;\w-&#93;+:pca-connector-ad:&#91;\w-&#93;+:&#91;0-9&#93;+:connector\/&#91;0-9a-f&#93;&#123;8&#125;(-&#91;0-9a-f&#93;&#123;4&#125;)&#123;3&#125;-&#91;0-9a-f&#93;&#123;12&#125;\/template\/&#91;0-9a-f&#93;&#123;8&#125;(-&#91;0-9a-f&#93;&#123;4&#125;)&#123;3&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the Access Control Entry was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_template_group_access_control_entries">

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
    <td><CopyableCode code="AccessRights" /></td>
    <td><code>object</code></td>
    <td>Allow or deny permissions for an Active Directory group to enroll or autoenroll certificates for a template.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the Access Control Entry was created.</td>
</tr>
<tr>
    <td><CopyableCode code="GroupDisplayName" /></td>
    <td><code>string</code></td>
    <td>Name of the Active Directory group. This name does not need to match the group name in Active Directory. (pattern: &lt;code&gt;^&#91;\x20-\x7E&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="GroupSecurityIdentifier" /></td>
    <td><code>string</code></td>
    <td>Security identifier (SID) of the group object from Active Directory. The SID starts with "S-". (pattern: &lt;code&gt;^S-&#91;0-9&#93;-(&#91;0-9&#93;+-)&#123;1,14&#125;&#91;0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TemplateArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that was returned when you called CreateTemplate. (pattern: &lt;code&gt;^arn:&#91;\w-&#93;+:pca-connector-ad:&#91;\w-&#93;+:&#91;0-9&#93;+:connector\/&#91;0-9a-f&#93;&#123;8&#125;(-&#91;0-9a-f&#93;&#123;4&#125;)&#123;3&#125;-&#91;0-9a-f&#93;&#123;12&#125;\/template\/&#91;0-9a-f&#93;&#123;8&#125;(-&#91;0-9a-f&#93;&#123;4&#125;)&#123;3&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the Access Control Entry was updated.</td>
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
    <td><a href="#get_template_group_access_control_entry"><CopyableCode code="get_template_group_access_control_entry" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-group_security_identifier"><code>group_security_identifier</code></a>, <a href="#parameter-template_arn"><code>template_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the group access control entries for a template.</td>
</tr>
<tr>
    <td><a href="#list_template_group_access_control_entries"><CopyableCode code="list_template_group_access_control_entries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-template_arn"><code>template_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Lists group access control entries you created.</td>
</tr>
<tr>
    <td><a href="#create_template_group_access_control_entry"><CopyableCode code="create_template_group_access_control_entry" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-template_arn"><code>template_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AccessRights"><code>AccessRights</code></a>, <a href="#parameter-GroupDisplayName"><code>GroupDisplayName</code></a>, <a href="#parameter-GroupSecurityIdentifier"><code>GroupSecurityIdentifier</code></a></td>
    <td></td>
    <td>Create a group access control entry. Allow or deny Active Directory groups from enrolling and/or autoenrolling with the template based on the group security identifiers (SIDs).</td>
</tr>
<tr>
    <td><a href="#update_template_group_access_control_entry"><CopyableCode code="update_template_group_access_control_entry" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-group_security_identifier"><code>group_security_identifier</code></a>, <a href="#parameter-template_arn"><code>template_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update a group access control entry you created using CreateTemplateGroupAccessControlEntry.</td>
</tr>
<tr>
    <td><a href="#delete_template_group_access_control_entry"><CopyableCode code="delete_template_group_access_control_entry" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-group_security_identifier"><code>group_security_identifier</code></a>, <a href="#parameter-template_arn"><code>template_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a group access control entry.</td>
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
<tr id="parameter-group_security_identifier">
    <td><CopyableCode code="group_security_identifier" /></td>
    <td><code>string</code></td>
    <td>Security identifier (SID) of the group object from Active Directory. The SID starts with "S-".</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-template_arn">
    <td><CopyableCode code="template_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that was returned when you called CreateTemplate.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>Use this parameter when paginating results to specify the maximum number of items to return in the response on each page. If additional items exist beyond the number you specify, the NextToken element is sent in the response. Use this NextToken value in a subsequent request to retrieve additional items.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>Use this parameter when paginating results in a subsequent request after you receive a response with truncated results. Set it to the value of the NextToken parameter from the response you just received.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_template_group_access_control_entry"
    values={[
        { label: 'get_template_group_access_control_entry', value: 'get_template_group_access_control_entry' },
        { label: 'list_template_group_access_control_entries', value: 'list_template_group_access_control_entries' }
    ]}
>
<TabItem value="get_template_group_access_control_entry">

Retrieves the group access control entries for a template.

```sql
SELECT
AccessRights,
CreatedAt,
GroupDisplayName,
GroupSecurityIdentifier,
TemplateArn,
UpdatedAt
FROM aws.pca_connector_ad.template_group_access_control_entries
WHERE group_security_identifier = '{{ group_security_identifier }}' -- required
AND template_arn = '{{ template_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_template_group_access_control_entries">

Lists group access control entries you created.

```sql
SELECT
AccessRights,
CreatedAt,
GroupDisplayName,
GroupSecurityIdentifier,
TemplateArn,
UpdatedAt
FROM aws.pca_connector_ad.template_group_access_control_entries
WHERE template_arn = '{{ template_arn }}' -- required
AND region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_template_group_access_control_entry"
    values={[
        { label: 'create_template_group_access_control_entry', value: 'create_template_group_access_control_entry' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_template_group_access_control_entry">

Create a group access control entry. Allow or deny Active Directory groups from enrolling and/or autoenrolling with the template based on the group security identifiers (SIDs).

```sql
INSERT INTO aws.pca_connector_ad.template_group_access_control_entries (
AccessRights,
ClientToken,
GroupDisplayName,
GroupSecurityIdentifier,
template_arn,
region
)
SELECT 
'{{ AccessRights }}' /* required */,
'{{ ClientToken }}',
'{{ GroupDisplayName }}' /* required */,
'{{ GroupSecurityIdentifier }}' /* required */,
'{{ template_arn }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: template_group_access_control_entries
  props:
    - name: template_arn
      value: "{{ template_arn }}"
      description: Required parameter for the template_group_access_control_entries resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the template_group_access_control_entries resource.
    - name: AccessRights
      description: |
        Allow or deny permissions for an Active Directory group to enroll or autoenroll certificates for a template.
      value:
        AutoEnroll: "{{ AutoEnroll }}"
        Enroll: "{{ Enroll }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: GroupDisplayName
      value: "{{ GroupDisplayName }}"
    - name: GroupSecurityIdentifier
      value: "{{ GroupSecurityIdentifier }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_template_group_access_control_entry"
    values={[
        { label: 'update_template_group_access_control_entry', value: 'update_template_group_access_control_entry' }
    ]}
>
<TabItem value="update_template_group_access_control_entry">

Update a group access control entry you created using CreateTemplateGroupAccessControlEntry.

```sql
UPDATE aws.pca_connector_ad.template_group_access_control_entries
SET 
AccessRights = '{{ AccessRights }}',
GroupDisplayName = '{{ GroupDisplayName }}'
WHERE 
group_security_identifier = '{{ group_security_identifier }}' --required
AND template_arn = '{{ template_arn }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_template_group_access_control_entry"
    values={[
        { label: 'delete_template_group_access_control_entry', value: 'delete_template_group_access_control_entry' }
    ]}
>
<TabItem value="delete_template_group_access_control_entry">

Deletes a group access control entry.

```sql
DELETE FROM aws.pca_connector_ad.template_group_access_control_entries
WHERE group_security_identifier = '{{ group_security_identifier }}' --required
AND template_arn = '{{ template_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
