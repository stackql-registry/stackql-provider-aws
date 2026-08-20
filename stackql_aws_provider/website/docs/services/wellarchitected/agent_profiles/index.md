--- 
title: agent_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - agent_profiles
  - wellarchitected
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

Creates, updates, deletes, gets or lists an <code>agent_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agent_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wellarchitected.agent_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_agent_profile"
    values={[
        { label: 'get_agent_profile', value: 'get_agent_profile' },
        { label: 'list_agent_profiles', value: 'list_agent_profiles' }
    ]}
>
<TabItem value="get_agent_profile">

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
    <td>The system name of the profile. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="aggregation_configuration" /></td>
    <td><code>array</code></td>
    <td>The aggregation configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the profile. (pattern: &lt;code&gt;arn:aws(&#91;a-z0-9-&#93;+)?:wellarchitected:&#91;a-z0-9-&#93;&#123;6,64&#125;:\d&#123;12&#125;:agent-profile/(&#91;a-zA-Z0-9_-&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="business_overview" /></td>
    <td><code>string</code></td>
    <td>The business overview of the profile. (pattern: &lt;code&gt;(?:(?!\$\&#123;&#91;a-zA-Z&#93;+:)&#91;\P&#123;C&#125;&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the profile was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user or system that created this profile.</td>
</tr>
<tr>
    <td><CopyableCode code="deletion_protection" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether deletion protection is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the profile. (pattern: &lt;code&gt;(?:(?!\$\&#123;&#91;a-zA-Z&#93;+:)&#91;\P&#123;C&#125;&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the profile. (pattern: &lt;code&gt;(?:(?!\$\&#123;&#91;a-zA-Z&#93;+:)&#91;\P&#123;C&#125;&#93;)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="eligible_for_architecture_generation" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the profile is valid for manual architecture generation.</td>
</tr>
<tr>
    <td><CopyableCode code="eligible_for_scheduled_generation" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the profile is valid for scheduled recommendation generation.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_role_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM execution role. (pattern: &lt;code&gt;arn:(&#91;a-z\-&#93;+):iam::\d&#123;12&#125;:role/(service-role/)?&#91;a-zA-Z0-9+=,.@\-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="field_errors" /></td>
    <td><code>object</code></td>
    <td>A map of field paths to error messages for invalid or missing input fields.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the profile was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user or system that last modified this profile.</td>
</tr>
<tr>
    <td><CopyableCode code="pillars" /></td>
    <td><code>array</code></td>
    <td>The Well-Architected Tool Framework pillars associated with the profile.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The tags associated with the profile.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_agent_profiles">

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
    <td>The system name of the profile. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="aggregation_configuration" /></td>
    <td><code>array</code></td>
    <td>The aggregation configuration that defines which Amazon Web Services accounts and Regions to analyze.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the optimization profile. (pattern: &lt;code&gt;arn:aws(&#91;a-z0-9-&#93;+)?:wellarchitected:&#91;a-z0-9-&#93;&#123;6,64&#125;:\d&#123;12&#125;:agent-profile/(&#91;a-zA-Z0-9_-&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="business_overview" /></td>
    <td><code>string</code></td>
    <td>The business overview for this profile. (pattern: &lt;code&gt;(?:(?!\$\&#123;&#91;a-zA-Z&#93;+:)&#91;\P&#123;C&#125;&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the profile was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user or system that created this profile.</td>
</tr>
<tr>
    <td><CopyableCode code="deletion_protection" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether deletion protection is enabled for the profile.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the profile. (pattern: &lt;code&gt;(?:(?!\$\&#123;&#91;a-zA-Z&#93;+:)&#91;\P&#123;C&#125;&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the profile shown to users. (pattern: &lt;code&gt;(?:(?!\$\&#123;&#91;a-zA-Z&#93;+:)&#91;\P&#123;C&#125;&#93;)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="eligible_for_architecture_generation" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the profile is valid for manual architecture generation.</td>
</tr>
<tr>
    <td><CopyableCode code="eligible_for_scheduled_generation" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the profile is valid for scheduled recommendation generation.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_role_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM execution role used for recommendation actions. (pattern: &lt;code&gt;arn:(&#91;a-z\-&#93;+):iam::\d&#123;12&#125;:role/(service-role/)?&#91;a-zA-Z0-9+=,.@\-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="field_errors" /></td>
    <td><code>object</code></td>
    <td>A map of field paths to error messages for invalid or missing input fields.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the profile was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user or system that last modified this profile.</td>
</tr>
<tr>
    <td><CopyableCode code="pillars" /></td>
    <td><code>array</code></td>
    <td>The Well-Architected Tool Framework pillars associated with this profile.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The tags associated with the profile.</td>
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
    <td><a href="#get_agent_profile"><CopyableCode code="get_agent_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-profile_arn"><code>profile_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about an optimization profile, including its configuration and metadata.</td>
</tr>
<tr>
    <td><a href="#list_agent_profiles"><CopyableCode code="list_agent_profiles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists optimization profiles in your account. Profiles define the scope and configuration for generating optimization recommendations.</td>
</tr>
<tr>
    <td><a href="#create_agent_profile"><CopyableCode code="create_agent_profile" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-pillars"><code>pillars</code></a>, <a href="#parameter-executionRoleArn"><code>executionRoleArn</code></a>, <a href="#parameter-aggregationConfiguration"><code>aggregationConfiguration</code></a></td>
    <td></td>
    <td>Creates an optimization profile that defines the scope and configuration for generating recommendations. A profile specifies the execution role, target pillars, and aggregation settings for analyzing your Amazon Web Services resources.</td>
</tr>
<tr>
    <td><a href="#update_agent_profile"><CopyableCode code="update_agent_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-profile_arn"><code>profile_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing optimization profile's configuration, including its pillars, execution role, and aggregation settings.</td>
</tr>
<tr>
    <td><a href="#delete_agent_profile"><CopyableCode code="delete_agent_profile" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-profile_arn"><code>profile_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an optimization profile and its associated configuration. This action cannot be undone.</td>
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
<tr id="parameter-profile_arn">
    <td><CopyableCode code="profile_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the profile to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of profiles to return in a single call. Default is 100.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token returned from a previous call to continue retrieving results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_agent_profile"
    values={[
        { label: 'get_agent_profile', value: 'get_agent_profile' },
        { label: 'list_agent_profiles', value: 'list_agent_profiles' }
    ]}
>
<TabItem value="get_agent_profile">

Retrieves detailed information about an optimization profile, including its configuration and metadata.

```sql
SELECT
name,
aggregation_configuration,
arn,
business_overview,
created_at,
created_by,
deletion_protection,
description,
display_name,
eligible_for_architecture_generation,
eligible_for_scheduled_generation,
execution_role_arn,
field_errors,
last_modified_at,
last_modified_by,
pillars,
tags
FROM aws.wellarchitected.agent_profiles
WHERE profile_arn = '{{ profile_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_agent_profiles">

Lists optimization profiles in your account. Profiles define the scope and configuration for generating optimization recommendations.

```sql
SELECT
name,
aggregation_configuration,
arn,
business_overview,
created_at,
created_by,
deletion_protection,
description,
display_name,
eligible_for_architecture_generation,
eligible_for_scheduled_generation,
execution_role_arn,
field_errors,
last_modified_at,
last_modified_by,
pillars,
tags
FROM aws.wellarchitected.agent_profiles
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_agent_profile"
    values={[
        { label: 'create_agent_profile', value: 'create_agent_profile' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_agent_profile">

Creates an optimization profile that defines the scope and configuration for generating recommendations. A profile specifies the execution role, target pillars, and aggregation settings for analyzing your Amazon Web Services resources.

```sql
INSERT INTO aws.wellarchitected.agent_profiles (
name,
displayName,
description,
businessOverview,
pillars,
deletionProtection,
executionRoleArn,
aggregationConfiguration,
clientToken,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ displayName }}',
'{{ description }}',
'{{ businessOverview }}',
'{{ pillars }}' /* required */,
{{ deletionProtection }},
'{{ executionRoleArn }}' /* required */,
'{{ aggregationConfiguration }}' /* required */,
'{{ clientToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
name,
aggregation_configuration,
arn,
business_overview,
created_at,
created_by,
deletion_protection,
description,
display_name,
eligible_for_architecture_generation,
eligible_for_scheduled_generation,
execution_role_arn,
field_errors,
last_modified_at,
last_modified_by,
pillars,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: agent_profiles
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the agent_profiles resource.
    - name: name
      value: "{{ name }}"
    - name: displayName
      value: "{{ displayName }}"
    - name: description
      value: "{{ description }}"
    - name: businessOverview
      value: "{{ businessOverview }}"
    - name: pillars
      value:
        - "{{ pillars }}"
    - name: deletionProtection
      value: {{ deletionProtection }}
    - name: executionRoleArn
      value: "{{ executionRoleArn }}"
    - name: aggregationConfiguration
      value:
        - accountId: "{{ accountId }}"
          regions: "{{ regions }}"
          accessRoleArn: "{{ accessRoleArn }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_agent_profile"
    values={[
        { label: 'update_agent_profile', value: 'update_agent_profile' }
    ]}
>
<TabItem value="update_agent_profile">

Updates an existing optimization profile's configuration, including its pillars, execution role, and aggregation settings.

```sql
UPDATE aws.wellarchitected.agent_profiles
SET 
clientToken = '{{ clientToken }}',
displayName = '{{ displayName }}',
description = '{{ description }}',
executionRoleArn = '{{ executionRoleArn }}',
aggregationConfiguration = '{{ aggregationConfiguration }}',
businessOverview = '{{ businessOverview }}',
pillars = '{{ pillars }}',
deletionProtection = {{ deletionProtection }}
WHERE 
profile_arn = '{{ profile_arn }}' --required
AND region = '{{ region }}' --required
RETURNING
name,
aggregation_configuration,
arn,
business_overview,
created_at,
created_by,
deletion_protection,
description,
display_name,
eligible_for_architecture_generation,
eligible_for_scheduled_generation,
execution_role_arn,
field_errors,
last_modified_at,
last_modified_by,
pillars,
tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_agent_profile"
    values={[
        { label: 'delete_agent_profile', value: 'delete_agent_profile' }
    ]}
>
<TabItem value="delete_agent_profile">

Deletes an optimization profile and its associated configuration. This action cannot be undone.

```sql
DELETE FROM aws.wellarchitected.agent_profiles
WHERE profile_arn = '{{ profile_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
