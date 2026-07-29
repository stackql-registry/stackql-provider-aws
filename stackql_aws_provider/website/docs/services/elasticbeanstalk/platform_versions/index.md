--- 
title: platform_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - platform_versions
  - elasticbeanstalk
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

Creates, updates, deletes, gets or lists a <code>platform_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="platform_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticbeanstalk.platform_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_platform_version"
    values={[
        { label: 'describe_platform_version', value: 'describe_platform_version' }
    ]}
>
<TabItem value="describe_platform_version">

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
    <td><CopyableCode code="custom_ami_list" /></td>
    <td><code>string</code></td>
    <td>The custom AMIs supported by the platform version.</td>
</tr>
<tr>
    <td><CopyableCode code="date_created" /></td>
    <td><code>string</code></td>
    <td>The date when the platform version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="date_updated" /></td>
    <td><code>string</code></td>
    <td>The date when the platform version was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the platform version.</td>
</tr>
<tr>
    <td><CopyableCode code="frameworks" /></td>
    <td><code>string</code></td>
    <td>The frameworks supported by the platform version.</td>
</tr>
<tr>
    <td><CopyableCode code="maintainer" /></td>
    <td><code>string</code></td>
    <td>Information about the maintainer of the platform version.</td>
</tr>
<tr>
    <td><CopyableCode code="operating_system_name" /></td>
    <td><code>string</code></td>
    <td>The operating system used by the platform version.</td>
</tr>
<tr>
    <td><CopyableCode code="operating_system_version" /></td>
    <td><code>string</code></td>
    <td>The version of the operating system used by the platform version.</td>
</tr>
<tr>
    <td><CopyableCode code="platform_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the platform version.</td>
</tr>
<tr>
    <td><CopyableCode code="platform_branch_lifecycle_state" /></td>
    <td><code>string</code></td>
    <td>The state of the platform version's branch in its lifecycle. Possible values: Beta | Supported | Deprecated | Retired</td>
</tr>
<tr>
    <td><CopyableCode code="platform_branch_name" /></td>
    <td><code>string</code></td>
    <td>The platform branch to which the platform version belongs.</td>
</tr>
<tr>
    <td><CopyableCode code="platform_category" /></td>
    <td><code>string</code></td>
    <td>The category of the platform version.</td>
</tr>
<tr>
    <td><CopyableCode code="platform_lifecycle_state" /></td>
    <td><code>string</code></td>
    <td>The state of the platform version in its lifecycle. Possible values: Recommended | null If a null value is returned, the platform version isn't the recommended one for its branch. Each platform branch has a single recommended platform version, typically the most recent one.</td>
</tr>
<tr>
    <td><CopyableCode code="platform_name" /></td>
    <td><code>string</code></td>
    <td>The name of the platform version.</td>
</tr>
<tr>
    <td><CopyableCode code="platform_owner" /></td>
    <td><code>string</code></td>
    <td>The AWS account ID of the person who created the platform version.</td>
</tr>
<tr>
    <td><CopyableCode code="platform_status" /></td>
    <td><code>string</code></td>
    <td>The status of the platform version.</td>
</tr>
<tr>
    <td><CopyableCode code="platform_version" /></td>
    <td><code>string</code></td>
    <td>The version of the platform version.</td>
</tr>
<tr>
    <td><CopyableCode code="programming_languages" /></td>
    <td><code>string</code></td>
    <td>The programming languages supported by the platform version.</td>
</tr>
<tr>
    <td><CopyableCode code="solution_stack_name" /></td>
    <td><code>string</code></td>
    <td>The name of the solution stack used by the platform version.</td>
</tr>
<tr>
    <td><CopyableCode code="supported_addon_list" /></td>
    <td><code>string</code></td>
    <td>The additions supported by the platform version.</td>
</tr>
<tr>
    <td><CopyableCode code="supported_tier_list" /></td>
    <td><code>string</code></td>
    <td>The tiers supported by the platform version.</td>
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
    <td><a href="#describe_platform_version"><CopyableCode code="describe_platform_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-PlatformArn"><code>PlatformArn</code></a></td>
    <td>Describes a platform version. Provides full details. Compare to ListPlatformVersions, which provides summary information about a list of platform versions. For definitions of platform version and other platform-related terms, see AWS Elastic Beanstalk Platforms Glossary.</td>
</tr>
<tr>
    <td><a href="#create_platform_version"><CopyableCode code="create_platform_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-PlatformName"><code>PlatformName</code></a>, <a href="#parameter-PlatformVersion"><code>PlatformVersion</code></a>, <a href="#parameter-PlatformDefinitionBundle"><code>PlatformDefinitionBundle</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-EnvironmentName"><code>EnvironmentName</code></a>, <a href="#parameter-OptionSettings"><code>OptionSettings</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Create a new version of your custom platform.</td>
</tr>
<tr>
    <td><a href="#delete_platform_version"><CopyableCode code="delete_platform_version" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-PlatformArn"><code>PlatformArn</code></a></td>
    <td>Deletes the specified version of a custom platform.</td>
</tr>
<tr>
    <td><a href="#list_platform_versions"><CopyableCode code="list_platform_versions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Lists the platform versions available for your account in an AWS Region. Provides summary information about each platform version. Compare to DescribePlatformVersion, which provides full details about a single platform version. For definitions of platform version and other platform-related terms, see AWS Elastic Beanstalk Platforms Glossary.</td>
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
<tr id="parameter-PlatformDefinitionBundle">
    <td><CopyableCode code="PlatformDefinitionBundle" /></td>
    <td><code>object</code></td>
    <td>The location of the platform definition archive in Amazon S3.</td>
</tr>
<tr id="parameter-PlatformName">
    <td><CopyableCode code="PlatformName" /></td>
    <td><code>string</code></td>
    <td>The name of your custom platform.</td>
</tr>
<tr id="parameter-PlatformVersion">
    <td><CopyableCode code="PlatformVersion" /></td>
    <td><code>string</code></td>
    <td>The number, such as 1.0.2, for the new platform version.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-EnvironmentName">
    <td><CopyableCode code="EnvironmentName" /></td>
    <td><code>string</code></td>
    <td>The name of the builder environment.</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>Criteria for restricting the resulting list of platform versions. The filter is interpreted as a logical conjunction (AND) of the separate PlatformFilter terms.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of platform version values returned in one call.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>For a paginated request. Specify a token from a previous response page to retrieve the next response page. All other parameter values must be identical to the ones specified in the initial request. If no NextToken is specified, the first page is retrieved.</td>
</tr>
<tr id="parameter-OptionSettings">
    <td><CopyableCode code="OptionSettings" /></td>
    <td><code>array</code></td>
    <td>The configuration option settings to apply to the builder environment.</td>
</tr>
<tr id="parameter-PlatformArn">
    <td><CopyableCode code="PlatformArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the version of the custom platform.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>Specifies the tags applied to the new platform version. Elastic Beanstalk applies these tags only to the platform version. Environments that you create using the platform version don't inherit the tags.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_platform_version"
    values={[
        { label: 'describe_platform_version', value: 'describe_platform_version' }
    ]}
>
<TabItem value="describe_platform_version">

Describes a platform version. Provides full details. Compare to ListPlatformVersions, which provides summary information about a list of platform versions. For definitions of platform version and other platform-related terms, see AWS Elastic Beanstalk Platforms Glossary.

```sql
SELECT
custom_ami_list,
date_created,
date_updated,
description,
frameworks,
maintainer,
operating_system_name,
operating_system_version,
platform_arn,
platform_branch_lifecycle_state,
platform_branch_name,
platform_category,
platform_lifecycle_state,
platform_name,
platform_owner,
platform_status,
platform_version,
programming_languages,
solution_stack_name,
supported_addon_list,
supported_tier_list
FROM aws.elasticbeanstalk.platform_versions
WHERE region = '{{ region }}' -- required
AND PlatformArn = '{{ PlatformArn }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_platform_version"
    values={[
        { label: 'create_platform_version', value: 'create_platform_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_platform_version">

Create a new version of your custom platform.

```sql
INSERT INTO aws.elasticbeanstalk.platform_versions (
PlatformName,
PlatformVersion,
PlatformDefinitionBundle,
region,
EnvironmentName,
OptionSettings,
Tags
)
SELECT 
'{{ PlatformName }}',
'{{ PlatformVersion }}',
'{{ PlatformDefinitionBundle }}',
'{{ region }}',
'{{ EnvironmentName }}',
'{{ OptionSettings }}',
'{{ Tags }}'
RETURNING
builder,
platform_summary
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: platform_versions
  props:
    - name: PlatformName
      value: "{{ PlatformName }}"
      description: Required parameter for the platform_versions resource.
    - name: PlatformVersion
      value: "{{ PlatformVersion }}"
      description: Required parameter for the platform_versions resource.
    - name: PlatformDefinitionBundle
      value: "{{ PlatformDefinitionBundle }}"
      description: Required parameter for the platform_versions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the platform_versions resource.
    - name: EnvironmentName
      value: "{{ EnvironmentName }}"
      description: The name of the builder environment.
      description: The name of the builder environment.
    - name: OptionSettings
      value: "{{ OptionSettings }}"
      description: The configuration option settings to apply to the builder environment.
      description: The configuration option settings to apply to the builder environment.
    - name: Tags
      value: "{{ Tags }}"
      description: Specifies the tags applied to the new platform version. Elastic Beanstalk applies these tags only to the platform version. Environments that you create using the platform version don't inherit the tags.
      description: Specifies the tags applied to the new platform version. Elastic Beanstalk applies these tags only to the platform version. Environments that you create using the platform version don't inherit the tags.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_platform_version"
    values={[
        { label: 'delete_platform_version', value: 'delete_platform_version' }
    ]}
>
<TabItem value="delete_platform_version">

Deletes the specified version of a custom platform.

```sql
DELETE FROM aws.elasticbeanstalk.platform_versions
WHERE region = '{{ region }}' --required
AND PlatformArn = '{{ PlatformArn }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_platform_versions"
    values={[
        { label: 'list_platform_versions', value: 'list_platform_versions' }
    ]}
>
<TabItem value="list_platform_versions">

Lists the platform versions available for your account in an AWS Region. Provides summary information about each platform version. Compare to DescribePlatformVersion, which provides full details about a single platform version. For definitions of platform version and other platform-related terms, see AWS Elastic Beanstalk Platforms Glossary.

```sql
EXEC aws.elasticbeanstalk.platform_versions.list_platform_versions 
@region='{{ region }}' --required, 
@Filters='{{ Filters }}', 
@MaxRecords='{{ MaxRecords }}', 
@NextToken='{{ NextToken }}'
;
```
</TabItem>
</Tabs>
