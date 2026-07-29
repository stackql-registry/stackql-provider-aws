--- 
title: configured_audience_model_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - configured_audience_model_associations
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

Creates, updates, deletes, gets or lists a <code>configured_audience_model_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configured_audience_model_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cleanrooms.configured_audience_model_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_configured_audience_model_association"
    values={[
        { label: 'get_configured_audience_model_association', value: 'get_configured_audience_model_association' },
        { label: 'list_configured_audience_model_associations', value: 'list_configured_audience_model_associations' }
    ]}
>
<TabItem value="get_configured_audience_model_association">

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
    <td>A unique identifier of the configured audience model association. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the configured audience model association. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the configured audience model association. (pattern: &lt;code&gt;arn:aws:cleanrooms:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:membership/&#91;\d\w-&#93;+/configuredaudiencemodelassociation/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaboration_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the collaboration that contains this configured audience model association. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:collaboration/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaboration_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier of the collaboration that contains this configured audience model association. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configured_audience_model_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the configured audience model that was used for this configured audience model association. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:configured-audience-model/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the configured audience model association was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the configured audience model association. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="manage_resource_policies" /></td>
    <td><code>boolean</code></td>
    <td>When TRUE, indicates that the resource policy for the configured audience model resource being associated is configured for Clean Rooms to manage permissions related to the given collaboration. When FALSE, indicates that the configured audience model resource owner will manage permissions related to the given collaboration.</td>
</tr>
<tr>
    <td><CopyableCode code="membership_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the membership that contains this configured audience model association. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:membership/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membership_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the membership that contains this configured audience model association. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time at which the configured audience model association was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_configured_audience_model_associations">

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
    <td>A unique identifier of the configured audience model association. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the configured audience model association. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the configured audience model association. (pattern: &lt;code&gt;arn:aws:cleanrooms:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:membership/&#91;\d\w-&#93;+/configuredaudiencemodelassociation/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaboration_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the collaboration that contains the configured audience model association. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:collaboration/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaboration_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier of the collaboration that configured audience model is associated with. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configured_audience_model_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the configured audience model that was used for this configured audience model association. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:configured-audience-model/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the configured audience model association was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the configured audience model association. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membership_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the membership that contains the configured audience model association. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:membership/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="membership_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier of the membership that contains the configured audience model association. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time at which the configured audience model association was updated.</td>
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
    <td><a href="#get_configured_audience_model_association"><CopyableCode code="get_configured_audience_model_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-configured_audience_model_association_identifier"><code>configured_audience_model_association_identifier</code></a>, <a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a configured audience model association.</td>
</tr>
<tr>
    <td><a href="#list_configured_audience_model_associations"><CopyableCode code="list_configured_audience_model_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists information about requested configured audience model associations.</td>
</tr>
<tr>
    <td><a href="#create_configured_audience_model_association"><CopyableCode code="create_configured_audience_model_association" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-configuredAudienceModelArn"><code>configuredAudienceModelArn</code></a>, <a href="#parameter-configuredAudienceModelAssociationName"><code>configuredAudienceModelAssociationName</code></a>, <a href="#parameter-manageResourcePolicies"><code>manageResourcePolicies</code></a></td>
    <td></td>
    <td>Provides the details necessary to create a configured audience model association.</td>
</tr>
<tr>
    <td><a href="#update_configured_audience_model_association"><CopyableCode code="update_configured_audience_model_association" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-configured_audience_model_association_identifier"><code>configured_audience_model_association_identifier</code></a>, <a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides the details necessary to update a configured audience model association.</td>
</tr>
<tr>
    <td><a href="#delete_configured_audience_model_association"><CopyableCode code="delete_configured_audience_model_association" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-configured_audience_model_association_identifier"><code>configured_audience_model_association_identifier</code></a>, <a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides the information necessary to delete a configured audience model association.</td>
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
<tr id="parameter-configured_audience_model_association_identifier">
    <td><CopyableCode code="configured_audience_model_association_identifier" /></td>
    <td><code>string</code></td>
    <td>A unique identifier of the configured audience model association that you want to delete.</td>
</tr>
<tr id="parameter-membership_identifier">
    <td><CopyableCode code="membership_identifier" /></td>
    <td><code>string</code></td>
    <td>A unique identifier of the membership that contains the audience model association that you want to delete.</td>
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
    defaultValue="get_configured_audience_model_association"
    values={[
        { label: 'get_configured_audience_model_association', value: 'get_configured_audience_model_association' },
        { label: 'list_configured_audience_model_associations', value: 'list_configured_audience_model_associations' }
    ]}
>
<TabItem value="get_configured_audience_model_association">

Returns information about a configured audience model association.

```sql
SELECT
id,
name,
arn,
collaboration_arn,
collaboration_id,
configured_audience_model_arn,
create_time,
description,
manage_resource_policies,
membership_arn,
membership_id,
update_time
FROM aws.cleanrooms.configured_audience_model_associations
WHERE configured_audience_model_association_identifier = '{{ configured_audience_model_association_identifier }}' -- required
AND membership_identifier = '{{ membership_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_configured_audience_model_associations">

Lists information about requested configured audience model associations.

```sql
SELECT
id,
name,
arn,
collaboration_arn,
collaboration_id,
configured_audience_model_arn,
create_time,
description,
membership_arn,
membership_id,
update_time
FROM aws.cleanrooms.configured_audience_model_associations
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
    defaultValue="create_configured_audience_model_association"
    values={[
        { label: 'create_configured_audience_model_association', value: 'create_configured_audience_model_association' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_configured_audience_model_association">

Provides the details necessary to create a configured audience model association.

```sql
INSERT INTO aws.cleanrooms.configured_audience_model_associations (
configuredAudienceModelArn,
configuredAudienceModelAssociationName,
manageResourcePolicies,
tags,
description,
membership_identifier,
region
)
SELECT 
'{{ configuredAudienceModelArn }}' /* required */,
'{{ configuredAudienceModelAssociationName }}' /* required */,
{{ manageResourcePolicies }} /* required */,
'{{ tags }}',
'{{ description }}',
'{{ membership_identifier }}',
'{{ region }}'
RETURNING
configured_audience_model_association
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: configured_audience_model_associations
  props:
    - name: membership_identifier
      value: "{{ membership_identifier }}"
      description: Required parameter for the configured_audience_model_associations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the configured_audience_model_associations resource.
    - name: configuredAudienceModelArn
      value: "{{ configuredAudienceModelArn }}"
    - name: configuredAudienceModelAssociationName
      value: "{{ configuredAudienceModelAssociationName }}"
    - name: manageResourcePolicies
      value: {{ manageResourcePolicies }}
    - name: tags
      value: "{{ tags }}"
      description: |
        Map of tags assigned to a resource
    - name: description
      value: "{{ description }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_configured_audience_model_association"
    values={[
        { label: 'update_configured_audience_model_association', value: 'update_configured_audience_model_association' }
    ]}
>
<TabItem value="update_configured_audience_model_association">

Provides the details necessary to update a configured audience model association.

```sql
UPDATE aws.cleanrooms.configured_audience_model_associations
SET 
description = '{{ description }}',
name = '{{ name }}'
WHERE 
configured_audience_model_association_identifier = '{{ configured_audience_model_association_identifier }}' --required
AND membership_identifier = '{{ membership_identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
configured_audience_model_association;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_configured_audience_model_association"
    values={[
        { label: 'delete_configured_audience_model_association', value: 'delete_configured_audience_model_association' }
    ]}
>
<TabItem value="delete_configured_audience_model_association">

Provides the information necessary to delete a configured audience model association.

```sql
DELETE FROM aws.cleanrooms.configured_audience_model_associations
WHERE configured_audience_model_association_identifier = '{{ configured_audience_model_association_identifier }}' --required
AND membership_identifier = '{{ membership_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
