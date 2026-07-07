--- 
title: applications
hide_title: false
hide_table_of_contents: false
keywords:
  - applications
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

Creates, updates, deletes, gets or lists an <code>applications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="applications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.servicecatalog_appregistry.applications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_application"
    values={[
        { label: 'get_application', value: 'get_application' },
        { label: 'list_applications', value: 'list_applications' }
    ]}
>
<TabItem value="get_application">

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
    <td>The identifier of the application. (pattern: &lt;code&gt;&#91;a-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the application. The name must be unique in the region in which you are creating the application. (pattern: &lt;code&gt;&#91;-.\w&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="applicationTag" /></td>
    <td><code>object</code></td>
    <td>A key-value pair that identifies an associated resource.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon resource name (ARN) that specifies the application across services. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:servicecatalog:&#91;a-z&#93;&#123;2&#125;(-gov)?-&#91;a-z&#93;+-\d:\d&#123;12&#125;:/applications/&#91;a-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="associatedResourceCount" /></td>
    <td><code>integer</code></td>
    <td>The number of top-level resources that were registered as part of this application.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The ISO-8601 formatted timestamp of the moment when the application was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the application.</td>
</tr>
<tr>
    <td><CopyableCode code="integrations" /></td>
    <td><code>object</code></td>
    <td>The information about the integration of the application with other services, such as Resource Groups.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The ISO-8601 formatted timestamp of the moment when the application was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Key-value pairs associated with the application.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_applications">

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
    <td>The identifier of the application. (pattern: &lt;code&gt;&#91;a-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the application. The name must be unique in the region in which you are creating the application. (pattern: &lt;code&gt;&#91;-.\w&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon resource name (ARN) that specifies the application across services. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:servicecatalog:&#91;a-z&#93;&#123;2&#125;(-gov)?-&#91;a-z&#93;+-\d:\d&#123;12&#125;:/applications/&#91;a-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The ISO-8601 formatted timestamp of the moment when the application was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the application.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The ISO-8601 formatted timestamp of the moment when the application was last updated.</td>
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
    <td><a href="#get_application"><CopyableCode code="get_application" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application"><code>application</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves metadata information about one of your applications. The application can be specified by its ARN, ID, or name (which is unique within one account in one region at a given point in time). Specify by ARN or ID in automated workflows if you want to make sure that the exact same application is returned or a ResourceNotFoundException is thrown, avoiding the ABA addressing problem.</td>
</tr>
<tr>
    <td><a href="#list_applications"><CopyableCode code="list_applications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves a list of all of your applications. Results are paginated.</td>
</tr>
<tr>
    <td><a href="#create_application"><CopyableCode code="create_application" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>Creates a new application that is the top-level node in a hierarchy of related cloud resource abstractions.</td>
</tr>
<tr>
    <td><a href="#update_application"><CopyableCode code="update_application" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-application"><code>application</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing application with new attributes.</td>
</tr>
<tr>
    <td><a href="#delete_application"><CopyableCode code="delete_application" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-application"><code>application</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an application that is specified either by its application ID, name, or ARN. All associated attribute groups and resources must be disassociated from it before deleting an application.</td>
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
    defaultValue="get_application"
    values={[
        { label: 'get_application', value: 'get_application' },
        { label: 'list_applications', value: 'list_applications' }
    ]}
>
<TabItem value="get_application">

Retrieves metadata information about one of your applications. The application can be specified by its ARN, ID, or name (which is unique within one account in one region at a given point in time). Specify by ARN or ID in automated workflows if you want to make sure that the exact same application is returned or a ResourceNotFoundException is thrown, avoiding the ABA addressing problem.

```sql
SELECT
id,
name,
applicationTag,
arn,
associatedResourceCount,
creationTime,
description,
integrations,
lastUpdateTime,
tags
FROM aws.servicecatalog_appregistry.applications
WHERE application = '{{ application }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_applications">

Retrieves a list of all of your applications. Results are paginated.

```sql
SELECT
id,
name,
arn,
creationTime,
description,
lastUpdateTime
FROM aws.servicecatalog_appregistry.applications
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_application"
    values={[
        { label: 'create_application', value: 'create_application' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_application">

Creates a new application that is the top-level node in a hierarchy of related cloud resource abstractions.

```sql
INSERT INTO aws.servicecatalog_appregistry.applications (
name,
description,
tags,
clientToken,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ tags }}',
'{{ clientToken }}' /* required */,
'{{ region }}'
RETURNING
application
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: applications
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the applications resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: tags
      value: "{{ tags }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_application"
    values={[
        { label: 'update_application', value: 'update_application' }
    ]}
>
<TabItem value="update_application">

Updates an existing application with new attributes.

```sql
UPDATE aws.servicecatalog_appregistry.applications
SET 
name = '{{ name }}',
description = '{{ description }}'
WHERE 
application = '{{ application }}' --required
AND region = '{{ region }}' --required
RETURNING
application;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_application"
    values={[
        { label: 'delete_application', value: 'delete_application' }
    ]}
>
<TabItem value="delete_application">

Deletes an application that is specified either by its application ID, name, or ARN. All associated attribute groups and resources must be disassociated from it before deleting an application.

```sql
DELETE FROM aws.servicecatalog_appregistry.applications
WHERE application = '{{ application }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
