--- 
title: project_memberships
hide_title: false
hide_table_of_contents: false
keywords:
  - project_memberships
  - datazone
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

Creates, updates, deletes, gets or lists a <code>project_memberships</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="project_memberships" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.project_memberships" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_project_memberships"
    values={[
        { label: 'list_project_memberships', value: 'list_project_memberships' }
    ]}
>
<TabItem value="list_project_memberships">

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
    <td><CopyableCode code="designation" /></td>
    <td><code>string</code></td>
    <td>The designated role of a project member. (PROJECT_OWNER, PROJECT_CONTRIBUTOR, PROJECT_CATALOG_VIEWER, PROJECT_CATALOG_CONSUMER, PROJECT_CATALOG_STEWARD)</td>
</tr>
<tr>
    <td><CopyableCode code="member_details" /></td>
    <td><code>object</code></td>
    <td>The membership details of a project member.</td>
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
    <td><a href="#list_project_memberships"><CopyableCode code="list_project_memberships" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-project_identifier"><code>project_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists all members of the specified project.</td>
</tr>
<tr>
    <td><a href="#create_project_membership"><CopyableCode code="create_project_membership" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-project_identifier"><code>project_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-member"><code>member</code></a>, <a href="#parameter-designation"><code>designation</code></a></td>
    <td></td>
    <td>Creates a project membership in Amazon DataZone.</td>
</tr>
<tr>
    <td><a href="#delete_project_membership"><CopyableCode code="delete_project_membership" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-project_identifier"><code>project_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes project membership in Amazon DataZone.</td>
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
<tr id="parameter-domain_identifier">
    <td><CopyableCode code="domain_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon DataZone domain where project membership is deleted.</td>
</tr>
<tr id="parameter-project_identifier">
    <td><CopyableCode code="project_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon DataZone project the membership to which is deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of memberships to return in a single call to ListProjectMemberships. When the number of memberships to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListProjectMemberships to list the next set of memberships.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>When the number of memberships is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of memberships, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListProjectMemberships to list the next set of memberships.</td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The method by which you want to sort the project memberships.</td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order of the project memberships.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_project_memberships"
    values={[
        { label: 'list_project_memberships', value: 'list_project_memberships' }
    ]}
>
<TabItem value="list_project_memberships">

Lists all members of the specified project.

```sql
SELECT
designation,
member_details
FROM aws.datazone.project_memberships
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND project_identifier = '{{ project_identifier }}' -- required
AND region = '{{ region }}' -- required
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_project_membership"
    values={[
        { label: 'create_project_membership', value: 'create_project_membership' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_project_membership">

Creates a project membership in Amazon DataZone.

```sql
INSERT INTO aws.datazone.project_memberships (
member,
designation,
domain_identifier,
project_identifier,
region
)
SELECT 
'{{ member }}' /* required */,
'{{ designation }}' /* required */,
'{{ domain_identifier }}',
'{{ project_identifier }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: project_memberships
  props:
    - name: domain_identifier
      value: "{{ domain_identifier }}"
      description: Required parameter for the project_memberships resource.
    - name: project_identifier
      value: "{{ project_identifier }}"
      description: Required parameter for the project_memberships resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the project_memberships resource.
    - name: member
      description: |
        The details about a project member.
      value:
        userIdentifier: "{{ userIdentifier }}"
        groupIdentifier: "{{ groupIdentifier }}"
    - name: designation
      value: "{{ designation }}"
      valid_values: ['PROJECT_OWNER', 'PROJECT_CONTRIBUTOR', 'PROJECT_CATALOG_VIEWER', 'PROJECT_CATALOG_CONSUMER', 'PROJECT_CATALOG_STEWARD']
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_project_membership"
    values={[
        { label: 'delete_project_membership', value: 'delete_project_membership' }
    ]}
>
<TabItem value="delete_project_membership">

Deletes project membership in Amazon DataZone.

```sql
DELETE FROM aws.datazone.project_memberships
WHERE domain_identifier = '{{ domain_identifier }}' --required
AND project_identifier = '{{ project_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
