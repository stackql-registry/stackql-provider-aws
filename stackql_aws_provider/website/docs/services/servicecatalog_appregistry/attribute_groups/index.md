--- 
title: attribute_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - attribute_groups
  - servicecatalog_appregistry
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

Creates, updates, deletes, gets or lists an <code>attribute_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="attribute_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.servicecatalog_appregistry.attribute_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_attribute_group"
    values={[
        { label: 'get_attribute_group', value: 'get_attribute_group' },
        { label: 'list_attribute_groups', value: 'list_attribute_groups' }
    ]}
>
<TabItem value="get_attribute_group">

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
    <td>The identifier of the attribute group. (pattern: &lt;code&gt;&#91;-.\w&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the attribute group. (pattern: &lt;code&gt;&#91;-.\w&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon resource name (ARN) that specifies the attribute group across services. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:servicecatalog:&#91;a-z&#93;&#123;2&#125;(-gov)?-&#91;a-z&#93;+-\d:\d&#123;12&#125;:/attribute-groups/&#91;-.\w&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>string</code></td>
    <td>A JSON string in the form of nested key-value pairs that represent the attributes in the group and describes an application and its components. (pattern: &lt;code&gt;&#91;\u0009\u000A\u000D\u0020-\u00FF&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The service principal that created the attribute group. (pattern: &lt;code&gt;^(?!-)(&#91;a-z0-9-&#93;+\.)+(aws\.internal|amazonaws\.com(\.cn)?)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The ISO-8601 formatted timestamp of the moment the attribute group was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the attribute group that the user provides.</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The ISO-8601 formatted timestamp of the moment the attribute group was last updated. This time is the same as the creationTime for a newly created attribute group.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Key-value pairs associated with the attribute group.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_attribute_groups">

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
    <td>The globally unique attribute group identifier of the attribute group. (pattern: &lt;code&gt;&#91;-.\w&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the attribute group. (pattern: &lt;code&gt;&#91;-.\w&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon resource name (ARN) that specifies the attribute group across services. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:servicecatalog:&#91;a-z&#93;&#123;2&#125;(-gov)?-&#91;a-z&#93;+-\d:\d&#123;12&#125;:/attribute-groups/&#91;-.\w&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The service principal that created the attribute group. (pattern: &lt;code&gt;^(?!-)(&#91;a-z0-9-&#93;+\.)+(aws\.internal|amazonaws\.com(\.cn)?)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The ISO-8601 formatted timestamp of the moment the attribute group was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the attribute group that the user provides.</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The ISO-8601 formatted timestamp of the moment the attribute group was last updated. This time is the same as the creationTime for a newly created attribute group.</td>
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
    <td><a href="#get_attribute_group"><CopyableCode code="get_attribute_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-attribute_group"><code>attribute_group</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves an attribute group by its ARN, ID, or name. The attribute group can be specified by its ARN, ID, or name.</td>
</tr>
<tr>
    <td><a href="#list_attribute_groups"><CopyableCode code="list_attribute_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists all attribute groups which you have access to. Results are paginated.</td>
</tr>
<tr>
    <td><a href="#create_attribute_group"><CopyableCode code="create_attribute_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-attributes"><code>attributes</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>Creates a new attribute group as a container for user-defined attributes. This feature enables users to have full control over their cloud application's metadata in a rich machine-readable format to facilitate integration with automated workflows and third-party tools.</td>
</tr>
<tr>
    <td><a href="#associate_attribute_group"><CopyableCode code="associate_attribute_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-application"><code>application</code></a>, <a href="#parameter-attribute_group"><code>attribute_group</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Associates an attribute group with an application to augment the application's metadata with the group's attributes. This feature enables applications to be described with user-defined details that are machine-readable, such as third-party integrations.</td>
</tr>
<tr>
    <td><a href="#update_attribute_group"><CopyableCode code="update_attribute_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-attribute_group"><code>attribute_group</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing attribute group with new details.</td>
</tr>
<tr>
    <td><a href="#delete_attribute_group"><CopyableCode code="delete_attribute_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-attribute_group"><code>attribute_group</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an attribute group, specified either by its attribute group ID, name, or ARN.</td>
</tr>
<tr>
    <td><a href="#disassociate_attribute_group"><CopyableCode code="disassociate_attribute_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-application"><code>application</code></a>, <a href="#parameter-attribute_group"><code>attribute_group</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates an attribute group from an application to remove the extra attributes contained in the attribute group from the application's metadata. This operation reverts AssociateAttributeGroup.</td>
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
<tr id="parameter-application">
    <td><CopyableCode code="application" /></td>
    <td><code>string</code></td>
    <td>The name, ID, or ARN of the application.</td>
</tr>
<tr id="parameter-attribute_group">
    <td><CopyableCode code="attribute_group" /></td>
    <td><code>string</code></td>
    <td>The name, ID, or ARN of the attribute group that holds the attributes to describe the application.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The upper bound of the number of results to return (cannot exceed 25). If this parameter is omitted, it defaults to 25. This value is optional.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to use to get the next page of results after a previous API call.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_attribute_group"
    values={[
        { label: 'get_attribute_group', value: 'get_attribute_group' },
        { label: 'list_attribute_groups', value: 'list_attribute_groups' }
    ]}
>
<TabItem value="get_attribute_group">

Retrieves an attribute group by its ARN, ID, or name. The attribute group can be specified by its ARN, ID, or name.

```sql
SELECT
id,
name,
arn,
attributes,
created_by,
creation_time,
description,
last_update_time,
tags
FROM aws.servicecatalog_appregistry.attribute_groups
WHERE attribute_group = '{{ attribute_group }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_attribute_groups">

Lists all attribute groups which you have access to. Results are paginated.

```sql
SELECT
id,
name,
arn,
created_by,
creation_time,
description,
last_update_time
FROM aws.servicecatalog_appregistry.attribute_groups
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_attribute_group"
    values={[
        { label: 'create_attribute_group', value: 'create_attribute_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_attribute_group">

Creates a new attribute group as a container for user-defined attributes. This feature enables users to have full control over their cloud application's metadata in a rich machine-readable format to facilitate integration with automated workflows and third-party tools.

```sql
INSERT INTO aws.servicecatalog_appregistry.attribute_groups (
name,
description,
attributes,
tags,
clientToken,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ attributes }}' /* required */,
'{{ tags }}',
'{{ clientToken }}' /* required */,
'{{ region }}'
RETURNING
attribute_group
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: attribute_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the attribute_groups resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: attributes
      value: "{{ attributes }}"
    - name: tags
      value: "{{ tags }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_attribute_group"
    values={[
        { label: 'associate_attribute_group', value: 'associate_attribute_group' },
        { label: 'update_attribute_group', value: 'update_attribute_group' }
    ]}
>
<TabItem value="associate_attribute_group">

Associates an attribute group with an application to augment the application's metadata with the group's attributes. This feature enables applications to be described with user-defined details that are machine-readable, such as third-party integrations.

```sql
UPDATE aws.servicecatalog_appregistry.attribute_groups
SET 
-- No updatable properties
WHERE 
application = '{{ application }}' --required
AND attribute_group = '{{ attribute_group }}' --required
AND region = '{{ region }}' --required
RETURNING
application_arn,
attribute_group_arn;
```
</TabItem>
<TabItem value="update_attribute_group">

Updates an existing attribute group with new details.

```sql
UPDATE aws.servicecatalog_appregistry.attribute_groups
SET 
name = '{{ name }}',
description = '{{ description }}',
attributes = '{{ attributes }}'
WHERE 
attribute_group = '{{ attribute_group }}' --required
AND region = '{{ region }}' --required
RETURNING
attribute_group;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_attribute_group"
    values={[
        { label: 'delete_attribute_group', value: 'delete_attribute_group' }
    ]}
>
<TabItem value="delete_attribute_group">

Deletes an attribute group, specified either by its attribute group ID, name, or ARN.

```sql
DELETE FROM aws.servicecatalog_appregistry.attribute_groups
WHERE attribute_group = '{{ attribute_group }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_attribute_group"
    values={[
        { label: 'disassociate_attribute_group', value: 'disassociate_attribute_group' }
    ]}
>
<TabItem value="disassociate_attribute_group">

Disassociates an attribute group from an application to remove the extra attributes contained in the attribute group from the application's metadata. This operation reverts AssociateAttributeGroup.

```sql
EXEC aws.servicecatalog_appregistry.attribute_groups.disassociate_attribute_group 
@application='{{ application }}' --required, 
@attribute_group='{{ attribute_group }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
