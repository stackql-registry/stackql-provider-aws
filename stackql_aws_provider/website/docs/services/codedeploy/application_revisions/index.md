--- 
title: application_revisions
hide_title: false
hide_table_of_contents: false
keywords:
  - application_revisions
  - codedeploy
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

Creates, updates, deletes, gets or lists an <code>application_revisions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="application_revisions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codedeploy.application_revisions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_application_revisions"
    values={[
        { label: 'batch_get_application_revisions', value: 'batch_get_application_revisions' },
        { label: 'get_application_revision', value: 'get_application_revision' },
        { label: 'list_application_revisions', value: 'list_application_revisions' }
    ]}
>
<TabItem value="batch_get_application_revisions">

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
    <td><CopyableCode code="application_name" /></td>
    <td><code>string</code></td>
    <td>The name of the application that corresponds to the revisions.</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>Information about errors that might have occurred during the API call.</td>
</tr>
<tr>
    <td><CopyableCode code="revisions" /></td>
    <td><code>array</code></td>
    <td>Additional information about the revisions, including the type and location.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_application_revision">

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
    <td><CopyableCode code="application_name" /></td>
    <td><code>string</code></td>
    <td>The name of the application that corresponds to the revision.</td>
</tr>
<tr>
    <td><CopyableCode code="revision" /></td>
    <td><code>object</code></td>
    <td>Information about the location of an application revision.</td>
</tr>
<tr>
    <td><CopyableCode code="revision_info" /></td>
    <td><code>object</code></td>
    <td>General information about the revision.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_application_revisions">

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
    <td><CopyableCode code="app_spec_content" /></td>
    <td><code>object</code></td>
    <td>The content of an AppSpec file for an Lambda or Amazon ECS deployment. The content is formatted as JSON or YAML and stored as a RawString.</td>
</tr>
<tr>
    <td><CopyableCode code="git_hub_location" /></td>
    <td><code>object</code></td>
    <td>Information about the location of application artifacts stored in GitHub.</td>
</tr>
<tr>
    <td><CopyableCode code="revision_type" /></td>
    <td><code>string</code></td>
    <td>The type of application revision: S3: An application revision stored in Amazon S3. GitHub: An application revision stored in GitHub (EC2/On-premises deployments only). String: A YAML-formatted or JSON-formatted string (Lambda deployments only). AppSpecContent: An AppSpecContent object that contains the contents of an AppSpec file for an Lambda or Amazon ECS deployment. The content is formatted as JSON or YAML stored as a RawString. (S3, GitHub, String, AppSpecContent)</td>
</tr>
<tr>
    <td><CopyableCode code="s_3_location" /></td>
    <td><code>object</code></td>
    <td>Information about the location of a revision stored in Amazon S3.</td>
</tr>
<tr>
    <td><CopyableCode code="string" /></td>
    <td><code>object</code></td>
    <td>Information about the location of an Lambda deployment revision stored as a RawString.</td>
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
    <td><a href="#batch_get_application_revisions"><CopyableCode code="batch_get_application_revisions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about one or more application revisions. The maximum number of application revisions that can be returned is 25.</td>
</tr>
<tr>
    <td><a href="#get_application_revision"><CopyableCode code="get_application_revision" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about an application revision.</td>
</tr>
<tr>
    <td><a href="#list_application_revisions"><CopyableCode code="list_application_revisions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists information about revisions for an application.</td>
</tr>
<tr>
    <td><a href="#register_application_revision"><CopyableCode code="register_application_revision" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-applicationName"><code>applicationName</code></a>, <a href="#parameter-revision"><code>revision</code></a></td>
    <td></td>
    <td>Registers with CodeDeploy a revision for the specified application.</td>
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
    defaultValue="batch_get_application_revisions"
    values={[
        { label: 'batch_get_application_revisions', value: 'batch_get_application_revisions' },
        { label: 'get_application_revision', value: 'get_application_revision' },
        { label: 'list_application_revisions', value: 'list_application_revisions' }
    ]}
>
<TabItem value="batch_get_application_revisions">

Gets information about one or more application revisions. The maximum number of application revisions that can be returned is 25.

```sql
SELECT
application_name,
error_message,
revisions
FROM aws.codedeploy.application_revisions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_application_revision">

Gets information about an application revision.

```sql
SELECT
application_name,
revision,
revision_info
FROM aws.codedeploy.application_revisions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_application_revisions">

Lists information about revisions for an application.

```sql
SELECT
app_spec_content,
git_hub_location,
revision_type,
s_3_location,
string
FROM aws.codedeploy.application_revisions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_application_revision"
    values={[
        { label: 'register_application_revision', value: 'register_application_revision' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_application_revision">

Registers with CodeDeploy a revision for the specified application.

```sql
INSERT INTO aws.codedeploy.application_revisions (
applicationName,
description,
revision,
region
)
SELECT 
'{{ applicationName }}' /* required */,
'{{ description }}',
'{{ revision }}' /* required */,
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: application_revisions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the application_revisions resource.
    - name: applicationName
      value: "{{ applicationName }}"
      description: |
        The name of an CodeDeploy application associated with the user or Amazon Web Services account.
    - name: description
      value: "{{ description }}"
      description: |
        A comment about the revision.
    - name: revision
      description: |
        Information about the location of an application revision.
      value:
        revisionType: "{{ revisionType }}"
        s3Location:
          bucket: "{{ bucket }}"
          key: "{{ key }}"
          bundleType: "{{ bundleType }}"
          version: "{{ version }}"
          eTag: "{{ eTag }}"
        gitHubLocation:
          repository: "{{ repository }}"
          commitId: "{{ commitId }}"
        string:
          content: "{{ content }}"
          sha256: "{{ sha256 }}"
        appSpecContent:
          content: "{{ content }}"
          sha256: "{{ sha256 }}"
`}</CodeBlock>

</TabItem>
</Tabs>
