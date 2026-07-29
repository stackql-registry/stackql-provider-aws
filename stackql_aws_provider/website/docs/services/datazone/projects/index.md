--- 
title: projects
hide_title: false
hide_table_of_contents: false
keywords:
  - projects
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

Creates, updates, deletes, gets or lists a <code>projects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="projects" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.projects" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_project"
    values={[
        { label: 'get_project', value: 'get_project' },
        { label: 'list_projects', value: 'list_projects' }
    ]}
>
<TabItem value="get_project">

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
    <td>&gt;The ID of the project. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the project. (pattern: &lt;code&gt;&#91;\w -&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the project was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The Amazon DataZone user who created the project.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the project.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon DataZone domain in which the project exists. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domain_unit_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the domain unit. (pattern: &lt;code&gt;&#91;a-z0-9_\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environment_deployment_details" /></td>
    <td><code>object</code></td>
    <td>The environment deployment status of a project.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reasons" /></td>
    <td><code>array</code></td>
    <td>Specifies the error message that is returned if the operation cannot be successfully completed.</td>
</tr>
<tr>
    <td><CopyableCode code="glossary_terms" /></td>
    <td><code>array</code></td>
    <td>The business glossary terms that can be used in the project.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the project was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="project_category" /></td>
    <td><code>string</code></td>
    <td>The category of the project.</td>
</tr>
<tr>
    <td><CopyableCode code="project_profile_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the project profile of a project. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="project_status" /></td>
    <td><code>string</code></td>
    <td>The status of the project. (ACTIVE, DELETING, DELETE_FAILED, UPDATING, UPDATE_FAILED, MOVING)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_tags" /></td>
    <td><code>array</code></td>
    <td>The resource tags of the project.</td>
</tr>
<tr>
    <td><CopyableCode code="user_parameters" /></td>
    <td><code>array</code></td>
    <td>The user parameters of a project.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_projects">

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
    <td>The identifier of a project. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of a project. (pattern: &lt;code&gt;&#91;\w -&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when a project was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The Amazon DataZone user who created the project.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of a project.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of a Amazon DataZone domain where the project exists. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domain_unit_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the domain unit. (pattern: &lt;code&gt;&#91;a-z0-9_\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reasons" /></td>
    <td><code>array</code></td>
    <td>Specifies the error message that is returned if the operation cannot be successfully completed.</td>
</tr>
<tr>
    <td><CopyableCode code="project_category" /></td>
    <td><code>string</code></td>
    <td>The category of the project.</td>
</tr>
<tr>
    <td><CopyableCode code="project_status" /></td>
    <td><code>string</code></td>
    <td>The status of the project. (ACTIVE, DELETING, DELETE_FAILED, UPDATING, UPDATE_FAILED, MOVING)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the project was updated.</td>
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
    <td><a href="#get_project"><CopyableCode code="get_project" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a project in Amazon DataZone.</td>
</tr>
<tr>
    <td><a href="#list_projects"><CopyableCode code="list_projects" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-userIdentifier"><code>userIdentifier</code></a>, <a href="#parameter-groupIdentifier"><code>groupIdentifier</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-projectCategory"><code>projectCategory</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists Amazon DataZone projects.</td>
</tr>
<tr>
    <td><a href="#create_project"><CopyableCode code="create_project" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates an Amazon DataZone project.</td>
</tr>
<tr>
    <td><a href="#update_project"><CopyableCode code="update_project" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the specified project in Amazon DataZone.</td>
</tr>
<tr>
    <td><a href="#delete_project"><CopyableCode code="delete_project" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-skipDeletionCheck"><code>skipDeletionCheck</code></a></td>
    <td>Deletes a project in Amazon DataZone.</td>
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
    <td>The ID of the Amazon DataZone domain in which the project is deleted.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the project that is to be deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-groupIdentifier">
    <td><CopyableCode code="groupIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of a group.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of projects to return in a single call to ListProjects. When the number of projects to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListProjects to list the next set of projects.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the project.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>When the number of projects is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of projects, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListProjects to list the next set of projects.</td>
</tr>
<tr id="parameter-projectCategory">
    <td><CopyableCode code="projectCategory" /></td>
    <td><code>string</code></td>
    <td>A parameter to filter projects by their category.</td>
</tr>
<tr id="parameter-skipDeletionCheck">
    <td><CopyableCode code="skipDeletionCheck" /></td>
    <td><code>boolean</code></td>
    <td>Specifies the optional flag to delete all child entities within the project.</td>
</tr>
<tr id="parameter-userIdentifier">
    <td><CopyableCode code="userIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon DataZone user.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_project"
    values={[
        { label: 'get_project', value: 'get_project' },
        { label: 'list_projects', value: 'list_projects' }
    ]}
>
<TabItem value="get_project">

Gets a project in Amazon DataZone.

```sql
SELECT
id,
name,
created_at,
created_by,
description,
domain_id,
domain_unit_id,
environment_deployment_details,
failure_reasons,
glossary_terms,
last_updated_at,
project_category,
project_profile_id,
project_status,
resource_tags,
user_parameters
FROM aws.datazone.projects
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_projects">

Lists Amazon DataZone projects.

```sql
SELECT
id,
name,
created_at,
created_by,
description,
domain_id,
domain_unit_id,
failure_reasons,
project_category,
project_status,
updated_at
FROM aws.datazone.projects
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND region = '{{ region }}' -- required
AND userIdentifier = '{{ userIdentifier }}'
AND groupIdentifier = '{{ groupIdentifier }}'
AND name = '{{ name }}'
AND projectCategory = '{{ projectCategory }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_project"
    values={[
        { label: 'create_project', value: 'create_project' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_project">

Creates an Amazon DataZone project.

```sql
INSERT INTO aws.datazone.projects (
name,
description,
resourceTags,
glossaryTerms,
domainUnitId,
projectProfileId,
userParameters,
projectCategory,
projectExecutionRole,
membershipAssignments,
domain_identifier,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ resourceTags }}',
'{{ glossaryTerms }}',
'{{ domainUnitId }}',
'{{ projectProfileId }}',
'{{ userParameters }}',
'{{ projectCategory }}',
'{{ projectExecutionRole }}',
'{{ membershipAssignments }}',
'{{ domain_identifier }}',
'{{ region }}'
RETURNING
id,
name,
created_at,
created_by,
description,
domain_id,
domain_unit_id,
environment_deployment_details,
failure_reasons,
glossary_terms,
last_updated_at,
project_category,
project_profile_id,
project_status,
resource_tags,
user_parameters
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: projects
  props:
    - name: domain_identifier
      value: "{{ domain_identifier }}"
      description: Required parameter for the projects resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the projects resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: resourceTags
      value: "{{ resourceTags }}"
    - name: glossaryTerms
      value:
        - "{{ glossaryTerms }}"
    - name: domainUnitId
      value: "{{ domainUnitId }}"
    - name: projectProfileId
      value: "{{ projectProfileId }}"
    - name: userParameters
      value:
        - environmentId: "{{ environmentId }}"
          environmentResolvedAccount:
            awsAccountId: "{{ awsAccountId }}"
            regionName: "{{ regionName }}"
            sourceAccountPoolId: "{{ sourceAccountPoolId }}"
          environmentConfigurationName: "{{ environmentConfigurationName }}"
          environmentParameters: "{{ environmentParameters }}"
    - name: projectCategory
      value: "{{ projectCategory }}"
    - name: projectExecutionRole
      value: "{{ projectExecutionRole }}"
    - name: membershipAssignments
      value:
        - member:
            userIdentifier: "{{ userIdentifier }}"
            groupIdentifier: "{{ groupIdentifier }}"
          designation: "{{ designation }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_project"
    values={[
        { label: 'update_project', value: 'update_project' }
    ]}
>
<TabItem value="update_project">

Updates the specified project in Amazon DataZone.

```sql
UPDATE aws.datazone.projects
SET 
name = '{{ name }}',
description = '{{ description }}',
resourceTags = '{{ resourceTags }}',
glossaryTerms = '{{ glossaryTerms }}',
domainUnitId = '{{ domainUnitId }}',
environmentDeploymentDetails = '{{ environmentDeploymentDetails }}',
userParameters = '{{ userParameters }}',
projectProfileVersion = '{{ projectProfileVersion }}'
WHERE 
domain_identifier = '{{ domain_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
name,
created_at,
created_by,
description,
domain_id,
domain_unit_id,
environment_deployment_details,
failure_reasons,
glossary_terms,
last_updated_at,
project_category,
project_profile_id,
project_status,
resource_tags,
user_parameters;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_project"
    values={[
        { label: 'delete_project', value: 'delete_project' }
    ]}
>
<TabItem value="delete_project">

Deletes a project in Amazon DataZone.

```sql
DELETE FROM aws.datazone.projects
WHERE domain_identifier = '{{ domain_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
AND skipDeletionCheck = '{{ skipDeletionCheck }}'
;
```
</TabItem>
</Tabs>
