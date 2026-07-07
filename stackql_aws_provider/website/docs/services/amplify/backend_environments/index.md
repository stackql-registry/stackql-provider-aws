--- 
title: backend_environments
hide_title: false
hide_table_of_contents: false
keywords:
  - backend_environments
  - amplify
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

Creates, updates, deletes, gets or lists a <code>backend_environments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="backend_environments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.amplify.backend_environments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_backend_environment"
    values={[
        { label: 'get_backend_environment', value: 'get_backend_environment' },
        { label: 'list_backend_environments', value: 'list_backend_environments' }
    ]}
>
<TabItem value="get_backend_environment">

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
    <td><CopyableCode code="backendEnvironmentArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for a backend environment that is part of an Amplify app. (pattern: &lt;code&gt;(?s).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation date and time for a backend environment that is part of an Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentArtifacts" /></td>
    <td><code>string</code></td>
    <td>The name of deployment artifacts. (pattern: &lt;code&gt;(?s).+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentName" /></td>
    <td><code>string</code></td>
    <td>The name for a backend environment that is part of an Amplify app. (pattern: &lt;code&gt;(?s).+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="stackName" /></td>
    <td><code>string</code></td>
    <td>The AWS CloudFormation stack name of a backend environment. (pattern: &lt;code&gt;(?s).+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last updated date and time for a backend environment that is part of an Amplify app.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_backend_environments">

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
    <td><CopyableCode code="backendEnvironments" /></td>
    <td><code>array</code></td>
    <td>The list of backend environments for an Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token. If a non-null pagination token is returned in a result, pass its value in another request to retrieve more entries. (pattern: &lt;code&gt;(?s).*&lt;/code&gt;)</td>
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
    <td><a href="#get_backend_environment"><CopyableCode code="get_backend_environment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a backend environment for an Amplify app. This API is available only to Amplify Gen 1 applications where the backend is created using Amplify Studio or the Amplify command line interface (CLI). This API isn’t available to Amplify Gen 2 applications. When you deploy an application with Amplify Gen 2, you provision the app's backend infrastructure using Typescript code.</td>
</tr>
<tr>
    <td><a href="#list_backend_environments"><CopyableCode code="list_backend_environments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-environmentName"><code>environmentName</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the backend environments for an Amplify app. This API is available only to Amplify Gen 1 applications where the backend is created using Amplify Studio or the Amplify command line interface (CLI). This API isn’t available to Amplify Gen 2 applications. When you deploy an application with Amplify Gen 2, you provision the app's backend infrastructure using Typescript code.</td>
</tr>
<tr>
    <td><a href="#create_backend_environment"><CopyableCode code="create_backend_environment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-environmentName"><code>environmentName</code></a></td>
    <td></td>
    <td>Creates a new backend environment for an Amplify app. This API is available only to Amplify Gen 1 applications where the backend is created using Amplify Studio or the Amplify command line interface (CLI). This API isn’t available to Amplify Gen 2 applications. When you deploy an application with Amplify Gen 2, you provision the app's backend infrastructure using Typescript code.</td>
</tr>
<tr>
    <td><a href="#delete_backend_environment"><CopyableCode code="delete_backend_environment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a backend environment for an Amplify app. This API is available only to Amplify Gen 1 applications where the backend is created using Amplify Studio or the Amplify command line interface (CLI). This API isn’t available to Amplify Gen 2 applications. When you deploy an application with Amplify Gen 2, you provision the app's backend infrastructure using Typescript code.</td>
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
<tr id="parameter-app_id">
    <td><CopyableCode code="app_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of an Amplify app.</td>
</tr>
<tr id="parameter-environment_name">
    <td><CopyableCode code="environment_name" /></td>
    <td><code>string</code></td>
    <td>The name of a backend environment of an Amplify app.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-environmentName">
    <td><CopyableCode code="environmentName" /></td>
    <td><code>string</code></td>
    <td>The name of the backend environment</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to list in a single response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token. Set to null to start listing backend environments from the start. If a non-null pagination token is returned in a result, pass its value in here to list more backend environments.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_backend_environment"
    values={[
        { label: 'get_backend_environment', value: 'get_backend_environment' },
        { label: 'list_backend_environments', value: 'list_backend_environments' }
    ]}
>
<TabItem value="get_backend_environment">

Returns a backend environment for an Amplify app. This API is available only to Amplify Gen 1 applications where the backend is created using Amplify Studio or the Amplify command line interface (CLI). This API isn’t available to Amplify Gen 2 applications. When you deploy an application with Amplify Gen 2, you provision the app's backend infrastructure using Typescript code.

```sql
SELECT
backendEnvironmentArn,
createTime,
deploymentArtifacts,
environmentName,
stackName,
updateTime
FROM aws.amplify.backend_environments
WHERE app_id = '{{ app_id }}' -- required
AND environment_name = '{{ environment_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_backend_environments">

Lists the backend environments for an Amplify app. This API is available only to Amplify Gen 1 applications where the backend is created using Amplify Studio or the Amplify command line interface (CLI). This API isn’t available to Amplify Gen 2 applications. When you deploy an application with Amplify Gen 2, you provision the app's backend infrastructure using Typescript code.

```sql
SELECT
backendEnvironments,
nextToken
FROM aws.amplify.backend_environments
WHERE app_id = '{{ app_id }}' -- required
AND region = '{{ region }}' -- required
AND environmentName = '{{ environmentName }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_backend_environment"
    values={[
        { label: 'create_backend_environment', value: 'create_backend_environment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_backend_environment">

Creates a new backend environment for an Amplify app. This API is available only to Amplify Gen 1 applications where the backend is created using Amplify Studio or the Amplify command line interface (CLI). This API isn’t available to Amplify Gen 2 applications. When you deploy an application with Amplify Gen 2, you provision the app's backend infrastructure using Typescript code.

```sql
INSERT INTO aws.amplify.backend_environments (
environmentName,
stackName,
deploymentArtifacts,
app_id,
region
)
SELECT 
'{{ environmentName }}' /* required */,
'{{ stackName }}',
'{{ deploymentArtifacts }}',
'{{ app_id }}',
'{{ region }}'
RETURNING
backendEnvironment
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: backend_environments
  props:
    - name: app_id
      value: "{{ app_id }}"
      description: Required parameter for the backend_environments resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the backend_environments resource.
    - name: environmentName
      value: "{{ environmentName }}"
    - name: stackName
      value: "{{ stackName }}"
    - name: deploymentArtifacts
      value: "{{ deploymentArtifacts }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_backend_environment"
    values={[
        { label: 'delete_backend_environment', value: 'delete_backend_environment' }
    ]}
>
<TabItem value="delete_backend_environment">

Deletes a backend environment for an Amplify app. This API is available only to Amplify Gen 1 applications where the backend is created using Amplify Studio or the Amplify command line interface (CLI). This API isn’t available to Amplify Gen 2 applications. When you deploy an application with Amplify Gen 2, you provision the app's backend infrastructure using Typescript code.

```sql
DELETE FROM aws.amplify.backend_environments
WHERE app_id = '{{ app_id }}' --required
AND environment_name = '{{ environment_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
