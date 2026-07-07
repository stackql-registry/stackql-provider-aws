--- 
title: app_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - app_versions
  - resiliencehub
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

Creates, updates, deletes, gets or lists an <code>app_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="app_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehub.app_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_app_version"
    values={[
        { label: 'describe_app_version', value: 'describe_app_version' },
        { label: 'list_app_versions', value: 'list_app_versions' }
    ]}
>
<TabItem value="describe_app_version">

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
    <td><CopyableCode code="additionalInfo" /></td>
    <td><code>object</code></td>
    <td>Additional configuration parameters for an Resilience Hub application. If you want to implement additionalInfo through the Resilience Hub console rather than using an API call, see Configure the application configuration parameters. Currently, this parameter supports only failover region and account.</td>
</tr>
<tr>
    <td><CopyableCode code="appArn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;):&#91;0-9&#93;&#123;12&#125;:&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+.-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="appVersion" /></td>
    <td><code>string</code></td>
    <td>Resilience Hub application version. (pattern: &lt;code&gt;^\S&#123;1,50&#125;$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_app_versions">

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
    <td><CopyableCode code="appVersions" /></td>
    <td><code>array</code></td>
    <td>The version of the application.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Token for the next set of results, or null if there are no more results. (pattern: &lt;code&gt;^\S&#123;1,2000&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#describe_app_version"><CopyableCode code="describe_app_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the Resilience Hub application version.</td>
</tr>
<tr>
    <td><a href="#list_app_versions"><CopyableCode code="list_app_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the different versions for the Resilience Hub applications.</td>
</tr>
<tr>
    <td><a href="#update_app_version"><CopyableCode code="update_app_version" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-appArn"><code>appArn</code></a></td>
    <td></td>
    <td>Updates the Resilience Hub application version. This API updates the Resilience Hub application draft version. To use this information for running resiliency assessments, you must publish the Resilience Hub application using the PublishAppVersion API.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_app_version"
    values={[
        { label: 'describe_app_version', value: 'describe_app_version' },
        { label: 'list_app_versions', value: 'list_app_versions' }
    ]}
>
<TabItem value="describe_app_version">

Describes the Resilience Hub application version.

```sql
SELECT
additionalInfo,
appArn,
appVersion
FROM aws.resiliencehub.app_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_app_versions">

Lists the different versions for the Resilience Hub applications.

```sql
SELECT
appVersions,
nextToken
FROM aws.resiliencehub.app_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_app_version"
    values={[
        { label: 'update_app_version', value: 'update_app_version' }
    ]}
>
<TabItem value="update_app_version">

Updates the Resilience Hub application version. This API updates the Resilience Hub application draft version. To use this information for running resiliency assessments, you must publish the Resilience Hub application using the PublishAppVersion API.

```sql
UPDATE aws.resiliencehub.app_versions
SET 
additionalInfo = '{{ additionalInfo }}',
appArn = '{{ appArn }}'
WHERE 
region = '{{ region }}' --required
AND appArn = '{{ appArn }}' --required
RETURNING
additionalInfo,
appArn,
appVersion;
```
</TabItem>
</Tabs>
