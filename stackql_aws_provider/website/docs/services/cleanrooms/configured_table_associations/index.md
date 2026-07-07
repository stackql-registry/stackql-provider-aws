--- 
title: configured_table_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - configured_table_associations
  - cleanrooms
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

Creates, updates, deletes, gets or lists a <code>configured_table_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configured_table_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cleanrooms.configured_table_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_configured_table_association"
    values={[
        { label: 'get_configured_table_association', value: 'get_configured_table_association' },
        { label: 'list_configured_table_associations', value: 'list_configured_table_associations' }
    ]}
>
<TabItem value="get_configured_table_association">

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
    <td>The unique ID for the configured table association. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the configured table association, in lowercase. The table is identified by this name when running protected queries against the underlying data. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_&#93;((&#91;a-zA-Z0-9_ &#93;+-)*(&#91;a-zA-Z0-9_ &#93;+))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="analysisRuleTypes" /></td>
    <td><code>array</code></td>
    <td>The analysis rule types for the configured table association.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The unique ARN for the configured table association. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:configuredtableassociation/&#91;\d\w-&#93;+/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuredTableArn" /></td>
    <td><code>string</code></td>
    <td>The unique ARN for the configured table that the association refers to. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:configuredtable/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuredTableId" /></td>
    <td><code>string</code></td>
    <td>The unique ID for the configured table that the association refers to. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the configured table association was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the configured table association. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membershipArn" /></td>
    <td><code>string</code></td>
    <td>The unique ARN for the membership this configured table association belongs to. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:membership/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membershipId" /></td>
    <td><code>string</code></td>
    <td>The unique ID for the membership this configured table association belongs to. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="roleArn" /></td>
    <td><code>string</code></td>
    <td>The service will assume this role to access catalog metadata and query the table. (pattern: &lt;code&gt;arn:aws:iam::&#91;\w&#93;+:role/&#91;\w+=./@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the configured table association was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_configured_table_associations">

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
    <td>The unique ID for the configured table association. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the configured table association. The table is identified by this name when running Protected Queries against the underlying data. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_&#93;((&#91;a-zA-Z0-9_ &#93;+-)*(&#91;a-zA-Z0-9_ &#93;+))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="analysisRuleTypes" /></td>
    <td><code>array</code></td>
    <td>The analysis rule types that are associated with the configured table associations in this summary.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The unique ARN for the configured table association. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:configuredtableassociation/&#91;\d\w-&#93;+/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuredTableId" /></td>
    <td><code>string</code></td>
    <td>The unique configured table ID that this configured table association refers to. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the configured table association was created.</td>
</tr>
<tr>
    <td><CopyableCode code="membershipArn" /></td>
    <td><code>string</code></td>
    <td>The unique ARN for the membership that the configured table association belongs to. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:membership/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membershipId" /></td>
    <td><code>string</code></td>
    <td>The unique ID for the membership that the configured table association belongs to. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the configured table association was last updated.</td>
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
    <td><a href="#get_configured_table_association"><CopyableCode code="get_configured_table_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-configured_table_association_identifier"><code>configured_table_association_identifier</code></a>, <a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a configured table association.</td>
</tr>
<tr>
    <td><a href="#list_configured_table_associations"><CopyableCode code="list_configured_table_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists configured table associations for a membership.</td>
</tr>
<tr>
    <td><a href="#create_configured_table_association"><CopyableCode code="create_configured_table_association" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-configuredTableIdentifier"><code>configuredTableIdentifier</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a></td>
    <td></td>
    <td>Creates a configured table association. A configured table association links a configured table with a collaboration.</td>
</tr>
<tr>
    <td><a href="#update_configured_table_association"><CopyableCode code="update_configured_table_association" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-configured_table_association_identifier"><code>configured_table_association_identifier</code></a>, <a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a configured table association.</td>
</tr>
<tr>
    <td><a href="#delete_configured_table_association"><CopyableCode code="delete_configured_table_association" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-configured_table_association_identifier"><code>configured_table_association_identifier</code></a>, <a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a configured table association.</td>
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
<tr id="parameter-configured_table_association_identifier">
    <td><CopyableCode code="configured_table_association_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique ID for the configured table association to be deleted. Currently accepts the configured table ID.</td>
</tr>
<tr id="parameter-membership_identifier">
    <td><CopyableCode code="membership_identifier" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the membership that the configured table association belongs to. Currently accepts the membership ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results that are returned for an API request call. The service chooses a default number if you don't set one. The service might return a `nextToken` even if the `maxResults` value has not been met.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token that's used to fetch the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_configured_table_association"
    values={[
        { label: 'get_configured_table_association', value: 'get_configured_table_association' },
        { label: 'list_configured_table_associations', value: 'list_configured_table_associations' }
    ]}
>
<TabItem value="get_configured_table_association">

Retrieves a configured table association.

```sql
SELECT
id,
name,
analysisRuleTypes,
arn,
configuredTableArn,
configuredTableId,
createTime,
description,
membershipArn,
membershipId,
roleArn,
updateTime
FROM aws.cleanrooms.configured_table_associations
WHERE configured_table_association_identifier = '{{ configured_table_association_identifier }}' -- required
AND membership_identifier = '{{ membership_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_configured_table_associations">

Lists configured table associations for a membership.

```sql
SELECT
id,
name,
analysisRuleTypes,
arn,
configuredTableId,
createTime,
membershipArn,
membershipId,
updateTime
FROM aws.cleanrooms.configured_table_associations
WHERE membership_identifier = '{{ membership_identifier }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_configured_table_association"
    values={[
        { label: 'create_configured_table_association', value: 'create_configured_table_association' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_configured_table_association">

Creates a configured table association. A configured table association links a configured table with a collaboration.

```sql
INSERT INTO aws.cleanrooms.configured_table_associations (
name,
description,
configuredTableIdentifier,
roleArn,
tags,
membership_identifier,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ configuredTableIdentifier }}' /* required */,
'{{ roleArn }}' /* required */,
'{{ tags }}',
'{{ membership_identifier }}',
'{{ region }}'
RETURNING
configuredTableAssociation
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: configured_table_associations
  props:
    - name: membership_identifier
      value: "{{ membership_identifier }}"
      description: Required parameter for the configured_table_associations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the configured_table_associations resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: configuredTableIdentifier
      value: "{{ configuredTableIdentifier }}"
    - name: roleArn
      value: "{{ roleArn }}"
    - name: tags
      value: "{{ tags }}"
      description: |
        Map of tags assigned to a resource
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_configured_table_association"
    values={[
        { label: 'update_configured_table_association', value: 'update_configured_table_association' }
    ]}
>
<TabItem value="update_configured_table_association">

Updates a configured table association.

```sql
UPDATE aws.cleanrooms.configured_table_associations
SET 
description = '{{ description }}',
roleArn = '{{ roleArn }}'
WHERE 
configured_table_association_identifier = '{{ configured_table_association_identifier }}' --required
AND membership_identifier = '{{ membership_identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
configuredTableAssociation;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_configured_table_association"
    values={[
        { label: 'delete_configured_table_association', value: 'delete_configured_table_association' }
    ]}
>
<TabItem value="delete_configured_table_association">

Deletes a configured table association.

```sql
DELETE FROM aws.cleanrooms.configured_table_associations
WHERE configured_table_association_identifier = '{{ configured_table_association_identifier }}' --required
AND membership_identifier = '{{ membership_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
