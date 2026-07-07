--- 
title: project_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - project_profiles
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

Creates, updates, deletes, gets or lists a <code>project_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="project_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.project_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_project_profile"
    values={[
        { label: 'get_project_profile', value: 'get_project_profile' },
        { label: 'list_project_profiles', value: 'list_project_profiles' }
    ]}
>
<TabItem value="get_project_profile">

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
    <td>The ID of the project profile. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the project profile. (pattern: &lt;code&gt;&#91;\w -&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="allowCustomProjectResourceTags" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether custom project resource tags are supported.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the project profile was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The user who created the project profile.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the project profile.</td>
</tr>
<tr>
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td>The ID of the domain of the project profile. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domainUnitId" /></td>
    <td><code>string</code></td>
    <td>The ID of the domain unit of the project profile. (pattern: &lt;code&gt;&#91;a-z0-9_\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentConfigurations" /></td>
    <td><code>array</code></td>
    <td>The environment configurations of the project profile.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when project profile was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="projectResourceTags" /></td>
    <td><code>array</code></td>
    <td>The resource tags of the project profile.</td>
</tr>
<tr>
    <td><CopyableCode code="projectResourceTagsDescription" /></td>
    <td><code>string</code></td>
    <td>Field viewable through the UI that provides a project user with the allowed resource tag specifications.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the project profile. (ENABLED, DISABLED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_project_profiles">

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
    <td>The ID of the project profile. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of a project profile. (pattern: &lt;code&gt;&#91;\w -&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the project profile was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The user who created the project profile.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the project profile.</td>
</tr>
<tr>
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td>The domain ID of the project profile. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domainUnitId" /></td>
    <td><code>string</code></td>
    <td>The domain unit ID of the project profile. (pattern: &lt;code&gt;&#91;a-z0-9_\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which a project profile was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of a project profile. (ENABLED, DISABLED)</td>
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
    <td><a href="#get_project_profile"><CopyableCode code="get_project_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The details of the project profile.</td>
</tr>
<tr>
    <td><a href="#list_project_profiles"><CopyableCode code="list_project_profiles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists project profiles.</td>
</tr>
<tr>
    <td><a href="#create_project_profile"><CopyableCode code="create_project_profile" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a project profile.</td>
</tr>
<tr>
    <td><a href="#update_project_profile"><CopyableCode code="update_project_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a project profile.</td>
</tr>
<tr>
    <td><a href="#delete_project_profile"><CopyableCode code="delete_project_profile" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a project profile.</td>
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
    <td>The ID of the domain where a project profile is deleted.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the project profile that is deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of project profiles to return in a single call to ListProjectProfiles. When the number of project profiles to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListProjectProfiles to list the next set of project profiles.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of a project profile.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>When the number of project profiles is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of project profiles, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListProjectProfiles to list the next set of project profiles.</td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>Specifies by what to sort project profiles.</td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>Specifies the sort order of the project profiles.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_project_profile"
    values={[
        { label: 'get_project_profile', value: 'get_project_profile' },
        { label: 'list_project_profiles', value: 'list_project_profiles' }
    ]}
>
<TabItem value="get_project_profile">

The details of the project profile.

```sql
SELECT
id,
name,
allowCustomProjectResourceTags,
createdAt,
createdBy,
description,
domainId,
domainUnitId,
environmentConfigurations,
lastUpdatedAt,
projectResourceTags,
projectResourceTagsDescription,
status
FROM aws.datazone.project_profiles
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_project_profiles">

Lists project profiles.

```sql
SELECT
id,
name,
createdAt,
createdBy,
description,
domainId,
domainUnitId,
lastUpdatedAt,
status
FROM aws.datazone.project_profiles
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND region = '{{ region }}' -- required
AND name = '{{ name }}'
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
    defaultValue="create_project_profile"
    values={[
        { label: 'create_project_profile', value: 'create_project_profile' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_project_profile">

Creates a project profile.

```sql
INSERT INTO aws.datazone.project_profiles (
name,
description,
status,
projectResourceTags,
allowCustomProjectResourceTags,
projectResourceTagsDescription,
environmentConfigurations,
domainUnitIdentifier,
domain_identifier,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ status }}',
'{{ projectResourceTags }}',
{{ allowCustomProjectResourceTags }},
'{{ projectResourceTagsDescription }}',
'{{ environmentConfigurations }}',
'{{ domainUnitIdentifier }}',
'{{ domain_identifier }}',
'{{ region }}'
RETURNING
id,
name,
allowCustomProjectResourceTags,
createdAt,
createdBy,
description,
domainId,
domainUnitId,
environmentConfigurations,
lastUpdatedAt,
projectResourceTags,
projectResourceTagsDescription,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: project_profiles
  props:
    - name: domain_identifier
      value: "{{ domain_identifier }}"
      description: Required parameter for the project_profiles resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the project_profiles resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: status
      value: "{{ status }}"
      valid_values: ['ENABLED', 'DISABLED']
    - name: projectResourceTags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
          isValueEditable: {{ isValueEditable }}
    - name: allowCustomProjectResourceTags
      value: {{ allowCustomProjectResourceTags }}
    - name: projectResourceTagsDescription
      value: "{{ projectResourceTagsDescription }}"
    - name: environmentConfigurations
      value:
        - name: "{{ name }}"
          id: "{{ id }}"
          environmentBlueprintId: "{{ environmentBlueprintId }}"
          description: "{{ description }}"
          deploymentMode: "{{ deploymentMode }}"
          configurationParameters:
            ssmPath: "{{ ssmPath }}"
            parameterOverrides:
              - name: "{{ name }}"
                value: "{{ value }}"
                isEditable: {{ isEditable }}
            resolvedParameters:
              - name: "{{ name }}"
                value: "{{ value }}"
                isEditable: {{ isEditable }}
          awsAccount:
            awsAccountId: "{{ awsAccountId }}"
            awsAccountIdPath: "{{ awsAccountIdPath }}"
          accountPools: "{{ accountPools }}"
          awsRegion:
            regionName: "{{ regionName }}"
            regionNamePath: "{{ regionNamePath }}"
          deploymentOrder: {{ deploymentOrder }}
    - name: domainUnitIdentifier
      value: "{{ domainUnitIdentifier }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_project_profile"
    values={[
        { label: 'update_project_profile', value: 'update_project_profile' }
    ]}
>
<TabItem value="update_project_profile">

Updates a project profile.

```sql
UPDATE aws.datazone.project_profiles
SET 
name = '{{ name }}',
description = '{{ description }}',
status = '{{ status }}',
projectResourceTags = '{{ projectResourceTags }}',
allowCustomProjectResourceTags = {{ allowCustomProjectResourceTags }},
projectResourceTagsDescription = '{{ projectResourceTagsDescription }}',
environmentConfigurations = '{{ environmentConfigurations }}',
domainUnitIdentifier = '{{ domainUnitIdentifier }}'
WHERE 
domain_identifier = '{{ domain_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
name,
allowCustomProjectResourceTags,
createdAt,
createdBy,
description,
domainId,
domainUnitId,
environmentConfigurations,
lastUpdatedAt,
projectResourceTags,
projectResourceTagsDescription,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_project_profile"
    values={[
        { label: 'delete_project_profile', value: 'delete_project_profile' }
    ]}
>
<TabItem value="delete_project_profile">

Deletes a project profile.

```sql
DELETE FROM aws.datazone.project_profiles
WHERE domain_identifier = '{{ domain_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
