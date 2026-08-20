--- 
title: systems
hide_title: false
hide_table_of_contents: false
keywords:
  - systems
  - resiliencehubv2
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

Creates, updates, deletes, gets or lists a <code>systems</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="systems" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehubv2.systems" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_system"
    values={[
        { label: 'get_system', value: 'get_system' },
        { label: 'list_systems', value: 'list_systems' }
    ]}
>
<TabItem value="get_system">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Resource name (used in ARN — no spaces allowed). (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_\-&#93;&#123;1,59&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the system was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Resource description.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>KMS key identifier — accepts key ID, key ARN, alias name, or alias ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="organization_id" /></td>
    <td><code>string</code></td>
    <td>The AWS Organizations identifier for the system. (pattern: &lt;code&gt;o-&#91;a-z0-9&#93;&#123;10,32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ou_id" /></td>
    <td><code>string</code></td>
    <td>The organizational unit (OU) identifier for the system. (pattern: &lt;code&gt;ou-&#91;a-z0-9&#93;&#123;4,32&#125;-&#91;a-z0-9&#93;&#123;8,32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sharing_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether cross-account sharing is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="system_arn" /></td>
    <td><code>string</code></td>
    <td>ARN identifier. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;):&#91;0-9&#93;&#123;12&#125;:&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="system_id" /></td>
    <td><code>string</code></td>
    <td>System ID for cross-account use without exposing account structure. (pattern: &lt;code&gt;\S&#123;1,255&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the system was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_systems">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Resource name (used in ARN — no spaces allowed). (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_\-&#93;&#123;1,59&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the system was created.</td>
</tr>
<tr>
    <td><CopyableCode code="organization_id" /></td>
    <td><code>string</code></td>
    <td>Displayed only if caller has access. (pattern: &lt;code&gt;o-&#91;a-z0-9&#93;&#123;10,32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ou_id" /></td>
    <td><code>string</code></td>
    <td>Displayed only if caller has access. (pattern: &lt;code&gt;ou-&#91;a-z0-9&#93;&#123;4,32&#125;-&#91;a-z0-9&#93;&#123;8,32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="services_count" /></td>
    <td><code>integer</code></td>
    <td>The number of services in the system.</td>
</tr>
<tr>
    <td><CopyableCode code="system_arn" /></td>
    <td><code>string</code></td>
    <td>ARN identifier. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;):&#91;0-9&#93;&#123;12&#125;:&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="system_id" /></td>
    <td><code>string</code></td>
    <td>System ID for cross-account use without exposing account structure. (pattern: &lt;code&gt;\S&#123;1,255&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the system was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="user_journeys_count" /></td>
    <td><code>integer</code></td>
    <td>The number of user journeys in the system.</td>
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
    <td><a href="#get_system"><CopyableCode code="get_system" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-systemArn"><code>systemArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a system by ARN.</td>
</tr>
<tr>
    <td><a href="#list_systems"><CopyableCode code="list_systems" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ouId"><code>ouId</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists systems.</td>
</tr>
<tr>
    <td><a href="#create_system"><CopyableCode code="create_system" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a system that represents a logical grouping of services.</td>
</tr>
<tr>
    <td><a href="#update_system"><CopyableCode code="update_system" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-systemArn"><code>systemArn</code></a></td>
    <td></td>
    <td>Updates an existing system.</td>
</tr>
<tr>
    <td><a href="#delete_system"><CopyableCode code="delete_system" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a system.</td>
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
<tr id="parameter-systemArn">
    <td><CopyableCode code="systemArn" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-ouId">
    <td><CopyableCode code="ouId" /></td>
    <td><code>string</code></td>
    <td>Filter systems by organizational unit (OU) identifier.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_system"
    values={[
        { label: 'get_system', value: 'get_system' },
        { label: 'list_systems', value: 'list_systems' }
    ]}
>
<TabItem value="get_system">

Retrieves a system by ARN.

```sql
SELECT
name,
created_at,
description,
kms_key_id,
organization_id,
ou_id,
sharing_enabled,
system_arn,
system_id,
tags,
updated_at
FROM aws.resiliencehubv2.systems
WHERE systemArn = '{{ systemArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_systems">

Lists systems.

```sql
SELECT
name,
created_at,
organization_id,
ou_id,
services_count,
system_arn,
system_id,
updated_at,
user_journeys_count
FROM aws.resiliencehubv2.systems
WHERE region = '{{ region }}' -- required
AND ouId = '{{ ouId }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_system"
    values={[
        { label: 'create_system', value: 'create_system' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_system">

Creates a system that represents a logical grouping of services.

```sql
INSERT INTO aws.resiliencehubv2.systems (
name,
description,
sharingEnabled,
kmsKeyId,
tags,
clientToken,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
{{ sharingEnabled }},
'{{ kmsKeyId }}',
'{{ tags }}',
'{{ clientToken }}',
'{{ region }}'
RETURNING
system
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: systems
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the systems resource.
    - name: name
      value: "{{ name }}"
      description: |
        Resource name (used in ARN — no spaces allowed).
    - name: description
      value: "{{ description }}"
      description: |
        Resource description.
    - name: sharingEnabled
      value: {{ sharingEnabled }}
    - name: kmsKeyId
      value: "{{ kmsKeyId }}"
      description: |
        KMS key identifier — accepts key ID, key ARN, alias name, or alias ARN.
    - name: tags
      value: "{{ tags }}"
      description: |
        Resource tags.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        Idempotency token.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_system"
    values={[
        { label: 'update_system', value: 'update_system' }
    ]}
>
<TabItem value="update_system">

Updates an existing system.

```sql
UPDATE aws.resiliencehubv2.systems
SET 
systemArn = '{{ systemArn }}',
description = '{{ description }}',
sharingEnabled = {{ sharingEnabled }}
WHERE 
region = '{{ region }}' --required
AND systemArn = '{{ systemArn }}' --required
RETURNING
system;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_system"
    values={[
        { label: 'delete_system', value: 'delete_system' }
    ]}
>
<TabItem value="delete_system">

Deletes a system.

```sql
DELETE FROM aws.resiliencehubv2.systems
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
