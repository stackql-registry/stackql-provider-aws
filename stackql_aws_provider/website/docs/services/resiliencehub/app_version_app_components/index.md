--- 
title: app_version_app_components
hide_title: false
hide_table_of_contents: false
keywords:
  - app_version_app_components
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

Creates, updates, deletes, gets or lists an <code>app_version_app_components</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="app_version_app_components" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehub.app_version_app_components" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_app_version_app_component"
    values={[
        { label: 'describe_app_version_app_component', value: 'describe_app_version_app_component' },
        { label: 'list_app_version_app_components', value: 'list_app_version_app_components' }
    ]}
>
<TabItem value="describe_app_version_app_component">

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
    <td><CopyableCode code="app_arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;):&#91;0-9&#93;&#123;12&#125;:&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+.-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="app_component" /></td>
    <td><code>object</code></td>
    <td>Defines an Application Component.</td>
</tr>
<tr>
    <td><CopyableCode code="app_version" /></td>
    <td><code>string</code></td>
    <td>Resilience Hub application version. (pattern: &lt;code&gt;^\S&#123;1,50&#125;$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_app_version_app_components">

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
    <td><CopyableCode code="app_arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;):&#91;0-9&#93;&#123;12&#125;:&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+.-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="app_components" /></td>
    <td><code>array</code></td>
    <td>Defines an Application Component.</td>
</tr>
<tr>
    <td><CopyableCode code="app_version" /></td>
    <td><code>string</code></td>
    <td>Resilience Hub application version. (pattern: &lt;code&gt;^\S&#123;1,50&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
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
    <td><a href="#describe_app_version_app_component"><CopyableCode code="describe_app_version_app_component" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes an Application Component in the Resilience Hub application.</td>
</tr>
<tr>
    <td><a href="#list_app_version_app_components"><CopyableCode code="list_app_version_app_components" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all the Application Components in the Resilience Hub application.</td>
</tr>
<tr>
    <td><a href="#create_app_version_app_component"><CopyableCode code="create_app_version_app_component" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-appArn"><code>appArn</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Creates a new Application Component in the Resilience Hub application. This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the PublishAppVersion API.</td>
</tr>
<tr>
    <td><a href="#update_app_version_app_component"><CopyableCode code="update_app_version_app_component" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-appArn"><code>appArn</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Updates an existing Application Component in the Resilience Hub application. This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the PublishAppVersion API.</td>
</tr>
<tr>
    <td><a href="#delete_app_version_app_component"><CopyableCode code="delete_app_version_app_component" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Application Component from the Resilience Hub application. This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the PublishAppVersion API. You will not be able to delete an Application Component if it has resources associated with it.</td>
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
    defaultValue="describe_app_version_app_component"
    values={[
        { label: 'describe_app_version_app_component', value: 'describe_app_version_app_component' },
        { label: 'list_app_version_app_components', value: 'list_app_version_app_components' }
    ]}
>
<TabItem value="describe_app_version_app_component">

Describes an Application Component in the Resilience Hub application.

```sql
SELECT
app_arn,
app_component,
app_version
FROM aws.resiliencehub.app_version_app_components
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_app_version_app_components">

Lists all the Application Components in the Resilience Hub application.

```sql
SELECT
app_arn,
app_components,
app_version,
next_token
FROM aws.resiliencehub.app_version_app_components
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_app_version_app_component"
    values={[
        { label: 'create_app_version_app_component', value: 'create_app_version_app_component' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_app_version_app_component">

Creates a new Application Component in the Resilience Hub application. This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the PublishAppVersion API.

```sql
INSERT INTO aws.resiliencehub.app_version_app_components (
additionalInfo,
appArn,
clientToken,
id,
name,
type,
region
)
SELECT 
'{{ additionalInfo }}',
'{{ appArn }}' /* required */,
'{{ clientToken }}',
'{{ id }}',
'{{ name }}' /* required */,
'{{ type }}' /* required */,
'{{ region }}'
RETURNING
app_arn,
app_component,
app_version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: app_version_app_components
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the app_version_app_components resource.
    - name: additionalInfo
      value: "{{ additionalInfo }}"
    - name: appArn
      value: "{{ appArn }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: id
      value: "{{ id }}"
    - name: name
      value: "{{ name }}"
    - name: type
      value: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_app_version_app_component"
    values={[
        { label: 'update_app_version_app_component', value: 'update_app_version_app_component' }
    ]}
>
<TabItem value="update_app_version_app_component">

Updates an existing Application Component in the Resilience Hub application. This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the PublishAppVersion API.

```sql
UPDATE aws.resiliencehub.app_version_app_components
SET 
additionalInfo = '{{ additionalInfo }}',
appArn = '{{ appArn }}',
id = '{{ id }}',
name = '{{ name }}',
type = '{{ type }}'
WHERE 
region = '{{ region }}' --required
AND appArn = '{{ appArn }}' --required
AND id = '{{ id }}' --required
RETURNING
app_arn,
app_component,
app_version;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_app_version_app_component"
    values={[
        { label: 'delete_app_version_app_component', value: 'delete_app_version_app_component' }
    ]}
>
<TabItem value="delete_app_version_app_component">

Deletes an Application Component from the Resilience Hub application. This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the PublishAppVersion API. You will not be able to delete an Application Component if it has resources associated with it.

```sql
DELETE FROM aws.resiliencehub.app_version_app_components
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
