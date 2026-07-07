--- 
title: apps
hide_title: false
hide_table_of_contents: false
keywords:
  - apps
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

Creates, updates, deletes, gets or lists an <code>apps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="apps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.amplify.apps" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_app"
    values={[
        { label: 'get_app', value: 'get_app' },
        { label: 'list_apps', value: 'list_apps' }
    ]}
>
<TabItem value="get_app">

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
    <td>The name for the Amplify app. (pattern: &lt;code&gt;(?s).+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="appArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="appId" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the Amplify app. (pattern: &lt;code&gt;d&#91;a-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="autoBranchCreationConfig" /></td>
    <td><code>object</code></td>
    <td>Describes the automated branch creation configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="autoBranchCreationPatterns" /></td>
    <td><code>array</code></td>
    <td>Describes the automated branch creation glob patterns for the Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="basicAuthCredentials" /></td>
    <td><code>string</code></td>
    <td>The basic authorization credentials for branches for the Amplify app. You must base64-encode the authorization credentials and provide them in the format user:password. (pattern: &lt;code&gt;(?s).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="buildSpec" /></td>
    <td><code>string</code></td>
    <td>The build specification (build spec) file for an Amplify app build. (pattern: &lt;code&gt;(?s).+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cacheConfig" /></td>
    <td><code>object</code></td>
    <td>Describes the cache configuration for an Amplify app. For more information about how Amplify applies an optimal cache configuration for your app based on the type of content that is being served, see Managing cache configuration in the Amplify User guide.</td>
</tr>
<tr>
    <td><CopyableCode code="computeRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role for an SSR app. The Compute role allows the Amplify Hosting compute service to securely access specific Amazon Web Services resources based on the role's permissions. For more information about the SSR Compute role, see Adding an SSR Compute role in the Amplify User Guide. (pattern: &lt;code&gt;(?s).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp of when Amplify created the application.</td>
</tr>
<tr>
    <td><CopyableCode code="customHeaders" /></td>
    <td><code>string</code></td>
    <td>Describes the custom HTTP headers for the Amplify app. (pattern: &lt;code&gt;(?s).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="customRules" /></td>
    <td><code>array</code></td>
    <td>Describes the custom redirect and rewrite rules for the Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultDomain" /></td>
    <td><code>string</code></td>
    <td>The default domain for the Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for the Amplify app. (pattern: &lt;code&gt;(?s).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="enableAutoBranchCreation" /></td>
    <td><code>boolean</code></td>
    <td>Enables automated branch creation for the Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="enableBasicAuth" /></td>
    <td><code>boolean</code></td>
    <td>Enables basic authorization for the Amplify app's branches.</td>
</tr>
<tr>
    <td><CopyableCode code="enableBranchAutoBuild" /></td>
    <td><code>boolean</code></td>
    <td>Enables the auto-building of branches for the Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="enableBranchAutoDeletion" /></td>
    <td><code>boolean</code></td>
    <td>Automatically disconnect a branch in the Amplify console when you delete a branch from your Git repository.</td>
</tr>
<tr>
    <td><CopyableCode code="environmentVariables" /></td>
    <td><code>object</code></td>
    <td>The environment variables for the Amplify app. For a list of the environment variables that are accessible to Amplify by default, see Amplify Environment variables in the Amplify Hosting User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="iamServiceRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM service role for the Amplify app. (pattern: &lt;code&gt;(?s).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="jobConfig" /></td>
    <td><code>object</code></td>
    <td>Describes the configuration details that apply to the jobs for an Amplify app. Use JobConfig to apply configuration to jobs, such as customizing the build instance size when you create or update an Amplify app. For more information about customizable build instances, see Custom build instances in the Amplify User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="platform" /></td>
    <td><code>string</code></td>
    <td>The platform for the Amplify app. For a static app, set the platform type to WEB. For a dynamic server-side rendered (SSR) app, set the platform type to WEB_COMPUTE. For an app requiring Amplify Hosting's original SSR support only, set the platform type to WEB_DYNAMIC. If you are deploying an SSG only app with Next.js 14 or later, you must use the platform type WEB_COMPUTE. (WEB, WEB_DYNAMIC, WEB_COMPUTE)</td>
</tr>
<tr>
    <td><CopyableCode code="productionBranch" /></td>
    <td><code>object</code></td>
    <td>Describes the information about a production branch of the Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="repository" /></td>
    <td><code>string</code></td>
    <td>The Git repository for the Amplify app. (pattern: &lt;code&gt;(?s).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="repositoryCloneMethod" /></td>
    <td><code>string</code></td>
    <td>This is for internal use. The Amplify service uses this parameter to specify the authentication protocol to use to access the Git repository for an Amplify app. Amplify specifies TOKEN for a GitHub repository, SIGV4 for an Amazon Web Services CodeCommit repository, and SSH for GitLab and Bitbucket repositories. (SSH, TOKEN, SIGV4)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tag for the Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp of when Amplify updated the application.</td>
</tr>
<tr>
    <td><CopyableCode code="wafConfiguration" /></td>
    <td><code>object</code></td>
    <td>Describes the Firewall configuration for the Amplify app. Firewall support enables you to protect your hosted applications with a direct integration with WAF.</td>
</tr>
<tr>
    <td><CopyableCode code="webhookCreateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp of when Amplify created the webhook in your Git repository.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_apps">

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
    <td>The name for the Amplify app. (pattern: &lt;code&gt;(?s).+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="appArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="appId" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the Amplify app. (pattern: &lt;code&gt;d&#91;a-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="autoBranchCreationConfig" /></td>
    <td><code>object</code></td>
    <td>Describes the automated branch creation configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="autoBranchCreationPatterns" /></td>
    <td><code>array</code></td>
    <td>Describes the automated branch creation glob patterns for the Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="basicAuthCredentials" /></td>
    <td><code>string</code></td>
    <td>The basic authorization credentials for branches for the Amplify app. You must base64-encode the authorization credentials and provide them in the format user:password. (pattern: &lt;code&gt;(?s).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="buildSpec" /></td>
    <td><code>string</code></td>
    <td>The build specification (build spec) file for an Amplify app build. (pattern: &lt;code&gt;(?s).+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cacheConfig" /></td>
    <td><code>object</code></td>
    <td>Describes the cache configuration for an Amplify app. For more information about how Amplify applies an optimal cache configuration for your app based on the type of content that is being served, see Managing cache configuration in the Amplify User guide.</td>
</tr>
<tr>
    <td><CopyableCode code="computeRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role for an SSR app. The Compute role allows the Amplify Hosting compute service to securely access specific Amazon Web Services resources based on the role's permissions. For more information about the SSR Compute role, see Adding an SSR Compute role in the Amplify User Guide. (pattern: &lt;code&gt;(?s).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp of when Amplify created the application.</td>
</tr>
<tr>
    <td><CopyableCode code="customHeaders" /></td>
    <td><code>string</code></td>
    <td>Describes the custom HTTP headers for the Amplify app. (pattern: &lt;code&gt;(?s).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="customRules" /></td>
    <td><code>array</code></td>
    <td>Describes the custom redirect and rewrite rules for the Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultDomain" /></td>
    <td><code>string</code></td>
    <td>The default domain for the Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for the Amplify app. (pattern: &lt;code&gt;(?s).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="enableAutoBranchCreation" /></td>
    <td><code>boolean</code></td>
    <td>Enables automated branch creation for the Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="enableBasicAuth" /></td>
    <td><code>boolean</code></td>
    <td>Enables basic authorization for the Amplify app's branches.</td>
</tr>
<tr>
    <td><CopyableCode code="enableBranchAutoBuild" /></td>
    <td><code>boolean</code></td>
    <td>Enables the auto-building of branches for the Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="enableBranchAutoDeletion" /></td>
    <td><code>boolean</code></td>
    <td>Automatically disconnect a branch in the Amplify console when you delete a branch from your Git repository.</td>
</tr>
<tr>
    <td><CopyableCode code="environmentVariables" /></td>
    <td><code>object</code></td>
    <td>The environment variables for the Amplify app. For a list of the environment variables that are accessible to Amplify by default, see Amplify Environment variables in the Amplify Hosting User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="iamServiceRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM service role for the Amplify app. (pattern: &lt;code&gt;(?s).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="jobConfig" /></td>
    <td><code>object</code></td>
    <td>Describes the configuration details that apply to the jobs for an Amplify app. Use JobConfig to apply configuration to jobs, such as customizing the build instance size when you create or update an Amplify app. For more information about customizable build instances, see Custom build instances in the Amplify User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="platform" /></td>
    <td><code>string</code></td>
    <td>The platform for the Amplify app. For a static app, set the platform type to WEB. For a dynamic server-side rendered (SSR) app, set the platform type to WEB_COMPUTE. For an app requiring Amplify Hosting's original SSR support only, set the platform type to WEB_DYNAMIC. If you are deploying an SSG only app with Next.js 14 or later, you must use the platform type WEB_COMPUTE. (WEB, WEB_DYNAMIC, WEB_COMPUTE)</td>
</tr>
<tr>
    <td><CopyableCode code="productionBranch" /></td>
    <td><code>object</code></td>
    <td>Describes the information about a production branch of the Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="repository" /></td>
    <td><code>string</code></td>
    <td>The Git repository for the Amplify app. (pattern: &lt;code&gt;(?s).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="repositoryCloneMethod" /></td>
    <td><code>string</code></td>
    <td>This is for internal use. The Amplify service uses this parameter to specify the authentication protocol to use to access the Git repository for an Amplify app. Amplify specifies TOKEN for a GitHub repository, SIGV4 for an Amazon Web Services CodeCommit repository, and SSH for GitLab and Bitbucket repositories. (SSH, TOKEN, SIGV4)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tag for the Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp of when Amplify updated the application.</td>
</tr>
<tr>
    <td><CopyableCode code="wafConfiguration" /></td>
    <td><code>object</code></td>
    <td>Describes the Firewall configuration for the Amplify app. Firewall support enables you to protect your hosted applications with a direct integration with WAF.</td>
</tr>
<tr>
    <td><CopyableCode code="webhookCreateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp of when Amplify created the webhook in your Git repository.</td>
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
    <td><a href="#get_app"><CopyableCode code="get_app" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns an existing Amplify app specified by an app ID.</td>
</tr>
<tr>
    <td><a href="#list_apps"><CopyableCode code="list_apps" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a list of the existing Amplify apps.</td>
</tr>
<tr>
    <td><a href="#create_app"><CopyableCode code="create_app" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a new Amplify app.</td>
</tr>
<tr>
    <td><a href="#update_app"><CopyableCode code="update_app" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing Amplify app.</td>
</tr>
<tr>
    <td><a href="#delete_app"><CopyableCode code="delete_app" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing Amplify app specified by an app ID.</td>
</tr>
<tr>
    <td><a href="#generate_access_logs"><CopyableCode code="generate_access_logs" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-domainName"><code>domainName</code></a></td>
    <td></td>
    <td>Returns the website access logs for a specific time range using a presigned URL.</td>
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
    <td>The unique ID for an Amplify app.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to list in a single response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token. If non-null, the pagination token is returned in a result. Pass its value in another request to retrieve more entries.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_app"
    values={[
        { label: 'get_app', value: 'get_app' },
        { label: 'list_apps', value: 'list_apps' }
    ]}
>
<TabItem value="get_app">

Returns an existing Amplify app specified by an app ID.

```sql
SELECT
name,
appArn,
appId,
autoBranchCreationConfig,
autoBranchCreationPatterns,
basicAuthCredentials,
buildSpec,
cacheConfig,
computeRoleArn,
createTime,
customHeaders,
customRules,
defaultDomain,
description,
enableAutoBranchCreation,
enableBasicAuth,
enableBranchAutoBuild,
enableBranchAutoDeletion,
environmentVariables,
iamServiceRoleArn,
jobConfig,
platform,
productionBranch,
repository,
repositoryCloneMethod,
tags,
updateTime,
wafConfiguration,
webhookCreateTime
FROM aws.amplify.apps
WHERE app_id = '{{ app_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_apps">

Returns a list of the existing Amplify apps.

```sql
SELECT
name,
appArn,
appId,
autoBranchCreationConfig,
autoBranchCreationPatterns,
basicAuthCredentials,
buildSpec,
cacheConfig,
computeRoleArn,
createTime,
customHeaders,
customRules,
defaultDomain,
description,
enableAutoBranchCreation,
enableBasicAuth,
enableBranchAutoBuild,
enableBranchAutoDeletion,
environmentVariables,
iamServiceRoleArn,
jobConfig,
platform,
productionBranch,
repository,
repositoryCloneMethod,
tags,
updateTime,
wafConfiguration,
webhookCreateTime
FROM aws.amplify.apps
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_app"
    values={[
        { label: 'create_app', value: 'create_app' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_app">

Creates a new Amplify app.

```sql
INSERT INTO aws.amplify.apps (
name,
description,
repository,
platform,
computeRoleArn,
iamServiceRoleArn,
oauthToken,
accessToken,
environmentVariables,
enableBranchAutoBuild,
enableBranchAutoDeletion,
enableBasicAuth,
basicAuthCredentials,
customRules,
tags,
buildSpec,
customHeaders,
enableAutoBranchCreation,
autoBranchCreationPatterns,
autoBranchCreationConfig,
jobConfig,
cacheConfig,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ repository }}',
'{{ platform }}',
'{{ computeRoleArn }}',
'{{ iamServiceRoleArn }}',
'{{ oauthToken }}',
'{{ accessToken }}',
'{{ environmentVariables }}',
{{ enableBranchAutoBuild }},
{{ enableBranchAutoDeletion }},
{{ enableBasicAuth }},
'{{ basicAuthCredentials }}',
'{{ customRules }}',
'{{ tags }}',
'{{ buildSpec }}',
'{{ customHeaders }}',
{{ enableAutoBranchCreation }},
'{{ autoBranchCreationPatterns }}',
'{{ autoBranchCreationConfig }}',
'{{ jobConfig }}',
'{{ cacheConfig }}',
'{{ region }}'
RETURNING
app
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: apps
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the apps resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: repository
      value: "{{ repository }}"
    - name: platform
      value: "{{ platform }}"
      valid_values: ['WEB', 'WEB_DYNAMIC', 'WEB_COMPUTE']
    - name: computeRoleArn
      value: "{{ computeRoleArn }}"
    - name: iamServiceRoleArn
      value: "{{ iamServiceRoleArn }}"
    - name: oauthToken
      value: "{{ oauthToken }}"
    - name: accessToken
      value: "{{ accessToken }}"
    - name: environmentVariables
      value: "{{ environmentVariables }}"
    - name: enableBranchAutoBuild
      value: {{ enableBranchAutoBuild }}
    - name: enableBranchAutoDeletion
      value: {{ enableBranchAutoDeletion }}
    - name: enableBasicAuth
      value: {{ enableBasicAuth }}
    - name: basicAuthCredentials
      value: "{{ basicAuthCredentials }}"
    - name: customRules
      value:
        - source: "{{ source }}"
          target: "{{ target }}"
          status: "{{ status }}"
          condition: "{{ condition }}"
    - name: tags
      value: "{{ tags }}"
    - name: buildSpec
      value: "{{ buildSpec }}"
      description: |
        The build specification (build spec) file for an Amplify app build.
    - name: customHeaders
      value: "{{ customHeaders }}"
    - name: enableAutoBranchCreation
      value: {{ enableAutoBranchCreation }}
    - name: autoBranchCreationPatterns
      value:
        - "{{ autoBranchCreationPatterns }}"
    - name: autoBranchCreationConfig
      description: |
        Describes the automated branch creation configuration.
      value:
        stage: "{{ stage }}"
        framework: "{{ framework }}"
        enableAutoBuild: {{ enableAutoBuild }}
        environmentVariables: "{{ environmentVariables }}"
        basicAuthCredentials: "{{ basicAuthCredentials }}"
        enableBasicAuth: {{ enableBasicAuth }}
        enablePerformanceMode: {{ enablePerformanceMode }}
        buildSpec: "{{ buildSpec }}"
        enablePullRequestPreview: {{ enablePullRequestPreview }}
        pullRequestEnvironmentName: "{{ pullRequestEnvironmentName }}"
    - name: jobConfig
      description: |
        Describes the configuration details that apply to the jobs for an Amplify app. Use JobConfig to apply configuration to jobs, such as customizing the build instance size when you create or update an Amplify app. For more information about customizable build instances, see Custom build instances in the Amplify User Guide.
      value:
        buildComputeType: "{{ buildComputeType }}"
    - name: cacheConfig
      description: |
        Describes the cache configuration for an Amplify app. For more information about how Amplify applies an optimal cache configuration for your app based on the type of content that is being served, see Managing cache configuration in the Amplify User guide.
      value:
        type_: "{{ type_ }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_app"
    values={[
        { label: 'update_app', value: 'update_app' }
    ]}
>
<TabItem value="update_app">

Updates an existing Amplify app.

```sql
UPDATE aws.amplify.apps
SET 
name = '{{ name }}',
description = '{{ description }}',
platform = '{{ platform }}',
computeRoleArn = '{{ computeRoleArn }}',
iamServiceRoleArn = '{{ iamServiceRoleArn }}',
environmentVariables = '{{ environmentVariables }}',
enableBranchAutoBuild = {{ enableBranchAutoBuild }},
enableBranchAutoDeletion = {{ enableBranchAutoDeletion }},
enableBasicAuth = {{ enableBasicAuth }},
basicAuthCredentials = '{{ basicAuthCredentials }}',
customRules = '{{ customRules }}',
buildSpec = '{{ buildSpec }}',
customHeaders = '{{ customHeaders }}',
enableAutoBranchCreation = {{ enableAutoBranchCreation }},
autoBranchCreationPatterns = '{{ autoBranchCreationPatterns }}',
autoBranchCreationConfig = '{{ autoBranchCreationConfig }}',
repository = '{{ repository }}',
oauthToken = '{{ oauthToken }}',
accessToken = '{{ accessToken }}',
jobConfig = '{{ jobConfig }}',
cacheConfig = '{{ cacheConfig }}'
WHERE 
app_id = '{{ app_id }}' --required
AND region = '{{ region }}' --required
RETURNING
app;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_app"
    values={[
        { label: 'delete_app', value: 'delete_app' }
    ]}
>
<TabItem value="delete_app">

Deletes an existing Amplify app specified by an app ID.

```sql
DELETE FROM aws.amplify.apps
WHERE app_id = '{{ app_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="generate_access_logs"
    values={[
        { label: 'generate_access_logs', value: 'generate_access_logs' }
    ]}
>
<TabItem value="generate_access_logs">

Returns the website access logs for a specific time range using a presigned URL.

```sql
EXEC aws.amplify.apps.generate_access_logs 
@app_id='{{ app_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"startTime": "{{ startTime }}", 
"endTime": "{{ endTime }}", 
"domainName": "{{ domainName }}"
}'
;
```
</TabItem>
</Tabs>
