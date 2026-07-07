--- 
title: groups
hide_title: false
hide_table_of_contents: false
keywords:
  - groups
  - resource_groups
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

Creates, updates, deletes, gets or lists a <code>groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resource_groups.groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_group"
    values={[
        { label: 'get_group', value: 'get_group' }
    ]}
>
<TabItem value="get_group">

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
    <td><CopyableCode code="ApplicationTag" /></td>
    <td><code>object</code></td>
    <td>A tag that defines the application group membership. This tag is only supported for application groups.</td>
</tr>
<tr>
    <td><CopyableCode code="Criticality" /></td>
    <td><code>integer</code></td>
    <td>The critical rank of the application group on a scale of 1 to 10, with a rank of 1 being the most critical, and a rank of 10 being least critical.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the resource group. (pattern: &lt;code&gt;&#91;\sa-zA-Z0-9_\.-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DisplayName" /></td>
    <td><code>string</code></td>
    <td>The name of the application group, which you can change at any time. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="GroupArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon resource name (ARN) of the resource group. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;+)*:resource-groups:&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)+-\d&#123;1&#125;:&#91;0-9&#93;&#123;12&#125;:group/(&#91;a-zA-Z0-9_\.-&#93;&#123;1,300&#125;|&#91;a-zA-Z0-9_\.-&#93;&#123;1,150&#125;/&#91;a-z0-9&#93;&#123;26&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the resource group. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_\.-&#93;&#123;1,300&#125;|&#91;a-zA-Z0-9_\.-&#93;&#123;1,150&#125;/&#91;a-z0-9&#93;&#123;26&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Owner" /></td>
    <td><code>string</code></td>
    <td>A name, email address or other identifier for the person or group who is considered as the owner of this application group within your organization. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-@&#93;*)$&lt;/code&gt;)</td>
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
    <td><a href="#get_group"><CopyableCode code="get_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a specified resource group. Minimum permissions To run this command, you must have the following permissions: resource-groups:GetGroup</td>
</tr>
<tr>
    <td><a href="#create_group"><CopyableCode code="create_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a></td>
    <td></td>
    <td>Creates a resource group with the specified name and description. You can optionally include either a resource query or a service configuration. For more information about constructing a resource query, see Build queries and groups in Resource Groups in the Resource Groups User Guide. For more information about service-linked groups and service configurations, see Service configurations for Resource Groups. Minimum permissions To run this command, you must have the following permissions: resource-groups:CreateGroup</td>
</tr>
<tr>
    <td><a href="#update_group"><CopyableCode code="update_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the description for an existing group. You cannot update the name of a resource group. Minimum permissions To run this command, you must have the following permissions: resource-groups:UpdateGroup</td>
</tr>
<tr>
    <td><a href="#delete_group"><CopyableCode code="delete_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified resource group. Deleting a resource group does not delete any resources that are members of the group; it only deletes the group structure. Minimum permissions To run this command, you must have the following permissions: resource-groups:DeleteGroup</td>
</tr>
<tr>
    <td><a href="#list_groups"><CopyableCode code="list_groups" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of existing Resource Groups in your account. Minimum permissions To run this command, you must have the following permissions: resource-groups:ListGroups</td>
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
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the NextToken response element is present and has a value (is not null). Include that value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The parameter for receiving additional results if you receive a NextToken response in a previous request. A NextToken response indicates that more output is available. Set this parameter to the value provided by a previous call's NextToken response to indicate where the output should continue from.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_group"
    values={[
        { label: 'get_group', value: 'get_group' }
    ]}
>
<TabItem value="get_group">

Returns information about a specified resource group. Minimum permissions To run this command, you must have the following permissions: resource-groups:GetGroup

```sql
SELECT
ApplicationTag,
Criticality,
Description,
DisplayName,
GroupArn,
Name,
Owner
FROM aws.resource_groups.groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_group"
    values={[
        { label: 'create_group', value: 'create_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_group">

Creates a resource group with the specified name and description. You can optionally include either a resource query or a service configuration. For more information about constructing a resource query, see Build queries and groups in Resource Groups in the Resource Groups User Guide. For more information about service-linked groups and service configurations, see Service configurations for Resource Groups. Minimum permissions To run this command, you must have the following permissions: resource-groups:CreateGroup

```sql
INSERT INTO aws.resource_groups.groups (
Name,
Description,
ResourceQuery,
Tags,
Configuration,
Criticality,
Owner,
DisplayName,
region
)
SELECT 
'{{ Name }}' /* required */,
'{{ Description }}',
'{{ ResourceQuery }}',
'{{ Tags }}',
'{{ Configuration }}',
{{ Criticality }},
'{{ Owner }}',
'{{ DisplayName }}',
'{{ region }}'
RETURNING
Group,
GroupConfiguration,
ResourceQuery,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the groups resource.
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: ResourceQuery
      description: |
        The query you can use to define a resource group or a search for resources. A ResourceQuery specifies both a query Type and a Query string as JSON string objects. See the examples section for example JSON strings. For more information about creating a resource group with a resource query, see Build queries and groups in Resource Groups in the Resource Groups User Guide When you combine all of the elements together into a single string, any double quotes that are embedded inside another double quote pair must be escaped by preceding the embedded double quote with a backslash character (\). For example, a complete ResourceQuery parameter must be formatted like the following CLI parameter example: --resource-query '{"Type":"TAG_FILTERS_1_0","Query":"{\"ResourceTypeFilters\":[\"AWS::AllSupported\"],\"TagFilters\":[{\"Key\":\"Stage\",\"Values\":[\"Test\"]}]}"}' In the preceding example, all of the double quote characters in the value part of the Query element must be escaped because the value itself is surrounded by double quotes. For more information, see Quoting strings in the Command Line Interface User Guide. For the complete list of resource types that you can use in the array value for ResourceTypeFilters, see Resources you can use with Resource Groups and Tag Editor in the Resource Groups User Guide. For example: "ResourceTypeFilters":["AWS::S3::Bucket", "AWS::EC2::Instance"]
      value:
        Type: "{{ Type }}"
        Query: "{{ Query }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: Configuration
      value:
        - Type: "{{ Type }}"
          Parameters: "{{ Parameters }}"
    - name: Criticality
      value: {{ Criticality }}
    - name: Owner
      value: "{{ Owner }}"
    - name: DisplayName
      value: "{{ DisplayName }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_group"
    values={[
        { label: 'update_group', value: 'update_group' }
    ]}
>
<TabItem value="update_group">

Updates the description for an existing group. You cannot update the name of a resource group. Minimum permissions To run this command, you must have the following permissions: resource-groups:UpdateGroup

```sql
UPDATE aws.resource_groups.groups
SET 
GroupName = '{{ GroupName }}',
Group = '{{ Group }}',
Description = '{{ Description }}',
Criticality = {{ Criticality }},
Owner = '{{ Owner }}',
DisplayName = '{{ DisplayName }}'
WHERE 
region = '{{ region }}' --required
RETURNING
Group;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_group"
    values={[
        { label: 'delete_group', value: 'delete_group' }
    ]}
>
<TabItem value="delete_group">

Deletes the specified resource group. Deleting a resource group does not delete any resources that are members of the group; it only deletes the group structure. Minimum permissions To run this command, you must have the following permissions: resource-groups:DeleteGroup

```sql
DELETE FROM aws.resource_groups.groups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_groups"
    values={[
        { label: 'list_groups', value: 'list_groups' }
    ]}
>
<TabItem value="list_groups">

Returns a list of existing Resource Groups in your account. Minimum permissions To run this command, you must have the following permissions: resource-groups:ListGroups

```sql
EXEC aws.resource_groups.groups.list_groups 
@region='{{ region }}' --required, 
@maxResults='{{ maxResults }}', 
@nextToken='{{ nextToken }}' 
@@json=
'{
"Filters": "{{ Filters }}"
}'
;
```
</TabItem>
</Tabs>
